import { useState } from 'react';
import { loginUser } from '../Services/userService';
import { useForm } from "react-hook-form";
import { Modal, Form, Button } from 'react-bootstrap';

export default function LoginModal(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginResult, setLoginResult] = useState('')
  const { handleSubmit, register, formState: { errors } } = useForm();

  async function handleLogin() {
    var result = await loginUser(email, password);
    setLoginResult(result);
    if (result === null) {
      props.setIsUserIdentified(true);
    }
  }

  return (
    <>
      <Modal show={true} onHide={() => props.setShowIdentification(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email" placeholder="Enter your email"
              {...register("email", {
                required: "Please enter your email."
              })}
              value={email} onChange={e => setEmail(e.target.value)} />
              {errors.email && (
              <Form.Text className="text-danger" >{errors.email.message} </Form.Text>)}
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              {...register("password", {
                required: " This field is required. "
              })}
              value={password} onChange={e => setPassword(e.target.value)}
              />
              {errors.password && (
                <Form.Text className='text-danger'>
                  {errors.password.message}
                  </Form.Text>
                  )}
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p className='text-danger'>{loginResult}</p>
          <Button style={{ color: "red", cursor: 'pointer' }} onClick={() => props.setIsUserRegistered(false)}>Register</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
