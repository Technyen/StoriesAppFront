import CreateStory from "./CreateStory";
import StoryList from "./StoryList";
import Identification from "./Identification";
import { useState } from 'react';
import StoryContent from "./StoryContent";
import CardStory from "./CardStory";

export default function Creator(props) {
  const [showIdentification, setShowIdentification] = useState(true);
  const [stories, setStories] = useState([]);
  const [showStory, setShowStory] = useState(false);
  const [story, setStory]= useState({});
  const [storyId, setStoryId] = useState('');

  return (
    <>
      {
        props.isUserIdentified ?
          <>
            <CreateStory stories={stories} setStories={setStories} />
            {showStory?
              <StoryContent storyId={storyId} story={story} setStory={setStory} setHideStory={setShowStory}/>
              :
              <StoryList storyId={storyId} setStoryId={setStoryId} story={story} setStory={setStory} stories={stories} setStories={setStories} setHideStory ={setShowStory}/>
            }
            
          </>
          :
          showIdentification ?
            <Identification setShowIdentification={setShowIdentification} isUserIdentified={props.isUserIdentified} setIsUserIdentified={props.setIsUserIdentified} isUserReader={props.isUserReader} />
            : <CardStory story={story} setStory={setStory} stories={stories} setStories={setStories}/>
      }
    </>
  );
}
