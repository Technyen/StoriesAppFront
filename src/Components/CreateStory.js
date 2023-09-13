import { useState, useEffect } from 'react';
import { createStoryAsync } from '../Services/storyService';
import MyImage from "../Images/thumbs_up-0klWsZLRO-transformed.png";
import { useForm } from "react-hook-form";
import { Form, Button, Modal } from 'react-bootstrap';

export default function CreateStory({ stories, setStories}) {
  const [showModal, setShowModal] = useState(false);
  const [createResult, setCreateResult] = useState('')
  const [isCreateSuccess, setIsCreateSuccess] = useState(false);
  const { handleSubmit, register, reset, formState, formState: { errors } } = useForm();
  

  async function handleCreate(data) {
    var result = await createStoryAsync(data.title, data.category, data.ageSuggested, data.description, data.file);
    setCreateResult(result);
    if (result === null) {
      setCreateResult("Story created!");
      setIsCreateSuccess(true);
      setStories([...stories, {id:data.id, title:data.title, category:data.category, ageSuggested:data.ageSuggested, description:data.description, file:data.file }]);
    }
  }
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <>
      <div className="d-grid gap-2 col-2 mx-auto">
        <Button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>Create story</Button>
      </div>
      {
        isCreateSuccess ?
          <Modal show={showModal} onHide={() => { setShowModal(false); setIsCreateSuccess(false); }}>
            <Modal.Header closeButton>
              <Modal.Title>{createResult}</Modal.Title>
            </Modal.Header>
            <Modal.Body> <img src={MyImage} alt="thumbsupimg" className=" w-75 h-30 rounded mx-auto d-block" /></Modal.Body>
          </Modal>
          :
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Create your story</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit(handleCreate)} >
              <Modal.Body>
                <Form.Group className="mb-3" >
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" 
                    {...register("title", {
                      required: " This field is required. ",
                      pattern: { message: "Title cannot exceed 100 characters" }
                    })}
                  />
                  {errors.title && (
                    <Form.Text className='text-danger'>
                      {errors.title.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" 
                    {...register("category", {
                      required: " This field is required. "
                    })}
                  />
                  {errors.category && (
                    <Form.Text className='text-danger'>
                      {errors.category.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Age suggested</Form.Label>
                  <Form.Control type="number"  min="1" max="100"
                    {...register("ageSuggested", {
                      required: " This field is required. "
                    })}
                  />
                  {errors.ageSuggested && (
                    <Form.Text className='text-danger'>
                      {errors.ageSuggested.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload you image</Form.Label>
                  <Form.Control type="file" {...register("file")}/>
                  <img alt="preview" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Write your story here</Form.Label>
                  <Form.Control
                    as="textarea" 
                    style={{ height: '100px' }}
                    {...register("description", { required: " This field is required. " })}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" type="submit" >Create</Button>
              </Modal.Footer>
            </Form>
          </Modal>
      }
    </>
  )
}