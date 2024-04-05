import { useState } from 'react';
import './App.css';
import Player from './audio';
import CardList from './Lists';

function App() {
  const [link, setLink] = useState(
    'https://listen.ourquraan.com/Bander_Baleelah/007.mp3'
  );

  return (
    <>
      <div>
        <CardList setLink={setLink} />
        <Player linkes={link} />
      </div>
    </>
  );
}

export default App;
