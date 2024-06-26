import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList /> 
        </div>
        <div className="colunm eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
