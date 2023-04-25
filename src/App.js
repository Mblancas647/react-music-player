//Import Styles
import "./styles/app.scss";
//Import Components
import Player from "./components/Player";
import Song from "./components/Song";
//Import Util
import data from "./util";
import { useState } from "react";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[5]);
  return (
    <div className="App">
      <Song currentSong={currentSong}></Song>
      <Player currentSong={currentSong}></Player>
    </div>
  );
}

export default App;
