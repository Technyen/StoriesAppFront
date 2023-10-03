import { useState, useEffect } from 'react';
import { editStoryAsync, getStoryAsync } from '../Services/storyService';
import MyImage from "../Images/thumbs_up-0klWsZLRO-transformed.png";
import { useForm } from "react-hook-form";
import { Form, Button, Modal } from 'react-bootstrap';

export default function EditStory({ story, setStory, showModalEdit, setShowModalEdit, setStories, storyId }) {
  const [createResult, setCreateResult] = useState('');
  const [isCreateSuccess, setIsCreateSuccess] = useState(false);
  const { handleSubmit, register, reset, formState, formState: { errors } } = useForm({ values: story });
  const [file, setFile] = useState(null);
  async function onImageChange(e) {
    setFile(e.target.files[0]);
  }
 
  async function handleEdit(data) {
    var result = await editStoryAsync(data.id, data.title, data.category, data.ageSuggested, data.description, data.file, data.imageUrl);
    setCreateResult(result);

    if (result === null) {
      setCreateResult("Story saved!");
      setIsCreateSuccess(true);
      setStories(oldStories => oldStories.map(story => story.id === data.id ? data : story));
    }
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  useEffect(() => {
    async function FetchStory() {
      let storyFound = await getStoryAsync(storyId);
      setStory(storyFound);
    }
    if (storyId !== "") {
      FetchStory();
    }
  }, [storyId, setStory]);

  return (
    <>
      {
        isCreateSuccess ?
          <Modal show={showModalEdit} onHide={() => { setShowModalEdit(false); setIsCreateSuccess(false); }}>
            <Modal.Header closeButton>
              <Modal.Title>{createResult}</Modal.Title>
            </Modal.Header>
            <Modal.Body> <img src={MyImage} alt="thumbsupimg" className=" w-75 h-30 rounded mx-auto d-block" /></Modal.Body>
          </Modal>
          :
          <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit your story</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit(handleEdit)} >
              <Modal.Body>
                <Form.Group className="mb-3" >
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text"
                    {...register("title")}
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
                    {...register("category")}
                  />
                  {errors.category && (
                    <Form.Text className='text-danger'>
                      {errors.category.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Age suggested</Form.Label>
                  <Form.Control type="number" min="1" max="100"
                    {...register("ageSuggested")}
                  />
                  {errors.ageSuggested && (
                    <Form.Text className='text-danger'>
                      {errors.ageSuggested.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload you image</Form.Label>
                  <Form.Control type="file" accept='image/*' {...register("file", { onChange: onImageChange})}/>
                  <img alt="preview" className="img-fluid p-3" src={file? URL.createObjectURL(file) : story.imageUrl} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Write your story here</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: '100px' }}
                    {...register("description")}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" type="submit">Save</Button>
              </Modal.Footer>
            </Form>
          </Modal>
      }
    </>
  )
}
