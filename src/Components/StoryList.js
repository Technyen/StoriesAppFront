import React, { useEffect, useState } from 'react';
import { getStories } from '../Services/storyService';
import { Table } from 'react-bootstrap';

export default function StoryList() {
  const [stories, setStories] = useState([]);

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
          <td>{story.ageAppropiate}</td>
          <td>{story.category}</td>
        </tr>
      )
    })
  }
  return (
    <div>

      <h1 id="title">Story Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Age appropiate</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>

    </div>
  )
}