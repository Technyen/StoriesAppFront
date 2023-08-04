import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Identification from "./Identification";

export default function Header(props) {
  const [showIdentification, setShowIdentification] = useState(false)

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">CHILDREN STORIES</Navbar.Brand>
          <Button variant="primary" onClick={() => setShowIdentification(true)}>Login</Button>
        </Container>
      </Navbar>
      {
        showIdentification ?
          <Identification setShowIdentification={setShowIdentification} isUserIdentified={props.isUserIdentified} setIsUserIdentified={props.setIsUserIdentified} isUserReader={props.isUserReader} />
          : null
      }
    </>
  )
}
