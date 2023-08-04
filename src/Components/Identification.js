import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { Alert } from 'react-bootstrap';


export default function Identification(props) {
  const [isUserRegistered, setIsUserRegistered] = useState(true);

  return (
    <>       {
      props.isUserIdentified ?
        <Alert variant="primary" dismissible onClose={() => props.setShowIdentification(false)}>You are logged in</Alert>
        :
        isUserRegistered ?
          <LoginModal setShowIdentification={props.setShowIdentification} setIsUserRegistered={setIsUserRegistered} setIsUserIdentified={props.setIsUserIdentified} />
          :
          <RegisterModal setShowIdentification={props.setShowIdentification} setIsUserRegistered={setIsUserRegistered} setIsUserIdentified={props.setIsUserIdentified} />
    }
    </>
  )
}
