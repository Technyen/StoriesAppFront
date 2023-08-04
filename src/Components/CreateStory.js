import { useState } from 'react';
import { createStory } from '../Services/storyService';
import MyImage from "../Images/thumbs_up-0klWsZLRO-transformed.png";
import { useForm } from "react-hook-form";
import { Form, Button, Modal } from 'react-bootstrap';

export default function CreateStory() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [ageAppropiate, setAgeAppropiate] = useState('')
  const [description, setDescription] = useState('')
  const [createResult, setCreateResult] = useState('')
  const [isCreateSuccess, setCreateSuccess] = useState(false)
  const { handleSubmit, register, formState: { errors } } = useForm();

  async function handleCreate() {
    var result = await createStory(title, category, ageAppropiate, description);
    setCreateResult(result);
    if (result === null) {
      setCreateResult("Story created!");
      setCreateSuccess(true);
    }
  }

  return (
    <>
      <div className="d-grid gap-2 col-2 mx-auto">
        <Button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>Create story</Button>
      </div>
      {
        isCreateSuccess ?
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{createResult}</Modal.Title>
            </Modal.Header>
            <Modal.Body> <img src={MyImage} className=" w-75 h-30 rounded mx-auto d-block" /></Modal.Body>
            <Modal.Footer><Button variant="primary" onClick={() => setCreateSuccess(false)}>Create again</Button></Modal.Footer>
          </Modal>
          :
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Create your story</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit(handleCreate)} >
                <Form.Group className="mb-3" >
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text"
                    {...register("password", {
                      required: " This field is required. ",
                      pattern: { message: "Title cannot exceed 100 characters" }
                    })}
                    value={title} onChange={e => setTitle(e.target.value)}
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
                    value={category} onChange={e => setCategory(e.target.value)}
                  />
                  {errors.category && (
                    <Form.Text className='text-danger'>
                      {errors.category.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Age appropiate</Form.Label>
                  <Form.Control type="number" min="1" max="100"
                    {...register("age", {
                      required: " This field is required. "
                    })}
                    value={ageAppropiate} onChange={e => setAgeAppropiate(e.target.value)}
                  />
                  {errors.age && (
                    <Form.Text className='text-danger'>
                      {errors.age.message}
                    </Form.Text>
                  )}
                </Form.Group>
              </Form>
              <Form.Group>
                <Form.Label>Write your story here</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                  {...register("description", { required: " This field is required. " })}
                  value={description} onChange={e => setDescription(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCreate}>Create</Button>
            </Modal.Footer>
          </Modal>
      }
    </>
  )
}