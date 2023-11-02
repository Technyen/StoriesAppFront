import React, {useEffect} from 'react';
import { getStoriesAsync } from '../Services/storyService';
import { Table } from 'react-bootstrap';



export default function CardStory({storyId, story, stories, setStories}) {

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
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>
    </>
  )
}