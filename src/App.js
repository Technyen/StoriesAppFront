import Header from './Components/Header';
import Reader from './Components/Reader';
import Creator from './Components/Creator';
import Carousel from './Components/Carousel'
import { useState } from "react";

export default function App() {
  const [isUserIdentified, setIsUserIdentified] = useState(false);
  let isUserReader= false;


  return (
    <>
      <Header isUserIdentified={isUserIdentified} setIsUserIdentified={setIsUserIdentified} isUserReader={isUserReader} />
      <main className="App">
         <Carousel/>
        {
          isUserReader ?
            <Reader />
            : <Creator isUserIdentified={isUserIdentified} setIsUserIdentified={setIsUserIdentified} />
        }
      </main>
    </>
  );
}
