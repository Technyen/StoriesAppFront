import React, { useEffect, useState } from 'react';
import { getStories } from '../Services/storyService';
import EditStory from './EditStory';
import { Table, Button } from 'react-bootstrap';

export default function StoryList() {
  const [stories, setStories] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [title, setTitle]=useState('');

  useEffect(() => {
    (async () => {
      const stories = await getStories();
      setStories(stories);
    })();
  }, [])

  const renderTable = () => {
    return stories.map((story, index) => {
      return (
        <tr key={index}>
          <td >{index}</td>
          <td>{story.title}</td>
          <td>{story.ageSuggested}</td>
          <td>{story.category}</td>
          <td>
            <Button variant="secondary" className='m-2' onClick={() => { setShowModalEdit(true);setTitle(story.title) }}>Edit</Button>
            <Button variant='danger' className='m-2'>Delete</Button>
            <Button variant='info' className='m-2'>View</Button>
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
            <th>#</th>
            <th>Title</th>
            <th>Age suggested</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>
      <EditStory showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} title={title}/>

    </>
  )
}