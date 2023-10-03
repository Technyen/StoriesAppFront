import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Identification from "./Identification";

export default function Header(props) {
  const [login, setLogin] = useState(false)

  return (
    <>
      <Navbar expand="lg" className="sticky-top bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">CHILDREN STORIES</Navbar.Brand>
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
