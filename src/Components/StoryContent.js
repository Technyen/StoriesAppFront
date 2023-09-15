import {Modal} from 'react-bootstrap'
import React, { useEffect} from 'react';
import {getStoryAsync } from '../Services/storyService';


export default function StoryContent({storyId, story, setStory, setHideStory}) {

  useEffect(() => {
    async function FetchStory() {
      let storyFound = await getStoryAsync(storyId);
      setStory(storyFound);
    }
    if (storyId !== "") {
      FetchStory();
    }
  }, [setStory, storyId]);

    return (
        
        <div
      className="modal show container-xxl"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog  size="xl" >
        <Modal.Header className='modal-header bg-info' onClick={()=> {setHideStory(false)}}closeButton>
          <Modal.Title className='d-block text-center fw-semibold'>{story.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{story.title}</h1>
          <p>Category: {story.category}</p>
          <p>Age suggested: {story.ageSuggested}</p><br/>
          <img alt="preview" className='img-fluid mx-auto d-block' src={story.imageUrl}/>
          <p>{story.description}</p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
    );
}