import Header from './Components/Header';
import Reader from './Components/Reader';
import Creator from './Components/Creator';
import { useState } from "react";
import MyImage from "./Images/Caperucita-Roja.webp"

export default function App() {
  const [isUserIdentified, setIsUserIdentified] = useState(false);
  let isUserReader= false;


  return (
    <>
      <Header isUserIdentified={isUserIdentified} setIsUserIdentified={setIsUserIdentified} isUserReader={isUserReader} />
      <main className="App">
        <img src={MyImage} alt="heroimg"className="rounded mx-auto d-block" />
        {
          isUserReader ?
            <Reader />
            : <Creator isUserIdentified={isUserIdentified} setIsUserIdentified={setIsUserIdentified} />
        }
      </main>
    </>
  );
}
