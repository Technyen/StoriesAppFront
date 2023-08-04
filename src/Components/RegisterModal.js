import { useState } from 'react';
import { registerUser } from '../Services/userService';
import { useForm } from "react-hook-form";
import { Button, Modal, Form } from 'react-bootstrap';

export default function RegisterModal(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registerResult, setRegisterResult] = useState('')
  const { handleSubmit, register, formState: { errors } } = useForm();

  async function handleOk() {
    var result = await registerUser(name, email, password);
    setRegisterResult(result);
    if (result === null) {
      props.setIsUserIdentified(true);
    }
  }

  return (
    <>
      <Modal show={true} onHide={() => props.setShowIdentification(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleOk)}>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name" placeholder="Enter your name"
                {...register("name", {
                  required: " This field is required",
                  pattern: {
                    message: "name cannot exceed 20 characters"
                  }
                })}
                value={name} onChange={e => setName(e.target.value)} />
              {errors.name && (
                <Form.Text className="text-danger" >{errors.name.message} </Form.Text>)}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email" placeholder="Enter your email"
                {...register("email", {
                  required: " This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                  }
                })}
                value={email} onChange={e => setEmail(e.target.value)} />
              {errors.email && (
                <Form.Text className="text-danger" >{errors.email.message} </Form.Text>)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
                {...register("password", {
                  required: " This field is required. ",
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                    message: " Password requirements: 8-20 characters, 1 number, 1 uppercase, 1 symbol."
                  }
                })}
                value={password} onChange={e => setPassword(e.target.value)}
              />
              {errors.password && (
                <Form.Text className='text-danger'>
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">Register</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p className="text-danger">{registerResult}</p>
          <a style={{ color: "red", cursor: 'pointer' }} onClick={() => props.setIsUserRegistered(true)}>Login</a>
        </Modal.Footer>
      </Modal>
    </>
  )
}
