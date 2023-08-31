import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyImage from "../Images/thumbs_up-0klWsZLRO-transformed.png";
import { deleteStoryAsync } from '../Services/storyService';

export default function DeleteModal({ showDeleteModal, setShowDeleteModal,setStories, storyId}) {
    const [deleteResult, setDeleteResult] = useState('');
    const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
    const deleteById = id => {
        setStories(stories => {
        return stories.filter(story => story.id !== id)
        })
      }
    async function handleRemove() {
        var response = await deleteStoryAsync(storyId);
        setDeleteResult(response);
        if (response!==null ) {
            setDeleteResult("Delete successfully!");
            setIsDeleteSuccess(true);
        }
    }

    return (
        <>
            {
                isDeleteSuccess ?
                    <Modal show={showDeleteModal} onHide={() => { setShowDeleteModal(false); setIsDeleteSuccess(false); }}>
                        <Modal.Header closeButton>
                            <Modal.Title>{deleteResult}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <img src={MyImage} alt="thumbsupimg" className=" w-75 h-30 rounded mx-auto d-block" /></Modal.Body>
                    </Modal>
                    :
                    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Story</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this story ?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={()=>{handleRemove(); deleteById(storyId)}} >
                                Ok
                            </Button>
                        </Modal.Footer>
                    </Modal>
            }
        </>
    );
}
