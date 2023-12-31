import React, { useEffect, useState } from 'react';
import { getStoriesAsync } from '../Services/storyService';
import EditStory from './EditStory';
import { Table, Button } from 'react-bootstrap';
import DeleteModal from './DeleteModal';

export default function StoryList({storyId, setStoryId, story, setStory, stories, setStories, setHideStory}) {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  useEffect(() => {
    (async () => {
      const stories = await getStoriesAsync();
      setStories(stories);
    })();
  }, [setStories])

  const renderTable = () => {
    return stories.map((story, id) => {
      return (
        <tr key={id}>
          <td>{story.title}</td>
          <td>{story.ageSuggested}</td>
          <td>{story.category}</td>
          <td>
            <Button variant="secondary" className='m-2' onClick={() => { setShowModalEdit(true);setStoryId(story.id)}}>Edit</Button>
            <Button variant='danger' className='m-2' onClick={() => {setShowDeleteModal(true); setStoryId(story.id)}} >Delete</Button>
            <Button variant='info' className='m-2'onClick={() => {setHideStory(true); setStoryId(story.id)}}>View</Button>
          </td>
        </tr>
      )
    })
  }
  return (
    <>
      <h1 id="title">Stories</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Age suggested</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>
      <EditStory showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} story ={story} setStory={setStory} storyId={storyId} setStories={setStories}/>
      <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} storyId={storyId} setStories={setStories}/>
    </>
  )
}