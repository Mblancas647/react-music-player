//Import Styles
import "./styles/app.scss";
//Import Components
import Player from "./components/Player";
import Song from "./components/Song";
//Import Util
import data from "./util";

function App() {
  return (
    <div className="App">
      <Song></Song>
      <Player></Player>
    </div>
  );
}

export default App;
