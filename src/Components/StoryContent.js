import {Modal} from 'react-bootstrap'
export default function StoryContent({setHideStory}) {
   
    return (
        
        <div
      className="modal show container-xxl"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog  size="xl" >
        <Modal.Header className='modal-header bg-info' onClick={()=> setHideStory(false)}closeButton>
          <Modal.Title className='d-block text-center fw-semibold'>Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

       
      </Modal.Dialog>
    </div>
    );
}