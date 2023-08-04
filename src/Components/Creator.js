import CreateStory from "./CreateStory";
import StoryList from "./StoryList";
import Identification from "./Identification";
import { useState } from 'react';

export default function Creator(props) {
  const [showIdentification, setShowIdentification] = useState(true)

  return (
    <>
      {
        props.isUserIdentified ?
          <>
            <CreateStory />
            <StoryList />
          </>
          :
          showIdentification ?
            <Identification setShowIdentification={setShowIdentification} isUserIdentified={props.isUserIdentified} setIsUserIdentified={props.setIsUserIdentified} isUserReader={props.isUserReader} />
            : null
      }
    </>
  );
}
