import { useState } from 'react';
import FacialExpression from './components/FacialExpression'
import MoodSongs from './components/MoodSongs'

function App() {

    const [Songs, setSongs] = useState([
    {
      title: "text_title_1",
      artist: "text_artist_1",
      url: "text_url_1"
    },
    {
      title: "text_title_2",
      artist: "text_artist_2",
      url: "text_url_2"
    }
  ]);

  return (
    <>
      <FacialExpression setSongs={setSongs}/>
      <MoodSongs Songs={Songs}/>
    </>
  )
}

export default App
