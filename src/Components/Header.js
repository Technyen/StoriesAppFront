import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Identification from "./Identification";
import logoStories from '../Images/logo.png';

export default function Header(props) {
  const [login, setLogin] = useState(false)

  return (
    <>
      <Navbar expand="lg" className="sticky-top bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"> <img src={logoStories} alt="Logo" width="50" height="50" className="d-inline-block align-text-center"/>CHILDREN STORIES</Navbar.Brand>
          {
            login ?
              <Button variant="primary" onClick={() => {props.setShowIdentification(false); props.isUserReader(true)}}>Logout</Button> :
              <Button onClick={() => {setLogin(true); props.setShowIdentification(true)}}>Login</Button>
          }

        </Container>
      </Navbar>
      {
        props.showIdentification ?
          <Identification setShowIdentification={props.setShowIdentification} isUserIdentified={props.isUserIdentified} setIsUserIdentified={props.setIsUserIdentified} isUserReader={props.isUserReader} />
          : null
      }
    </>
  )
}
