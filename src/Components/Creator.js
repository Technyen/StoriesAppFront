import CreateStory from "./CreateStory";
import StoryList from "./StoryList";
import Identification from "./Identification";
import { useState } from 'react';
import StoryContent from "./StoryContent";

export default function Creator(props) {
  const [showIdentification, setShowIdentification] = useState(true);
  const [stories, setStories] = useState([]);
  const [hideStory, setHideStory] = useState(false);

  return (
    <>
      {
        props.isUserIdentified ?
          <>
            <CreateStory stories={stories} setStories={setStories} />
            {hideStory?
              <StoryContent setHideStory={setHideStory}/>
              :
              <StoryList stories={stories} setStories={setStories} setHideStory ={setHideStory}/>
            }
            
          </>
          :
          showIdentification ?
            <Identification setShowIdentification={setShowIdentification} isUserIdentified={props.isUserIdentified} setIsUserIdentified={props.setIsUserIdentified} isUserReader={props.isUserReader} />
            : null
      }
    </>
  );
}
