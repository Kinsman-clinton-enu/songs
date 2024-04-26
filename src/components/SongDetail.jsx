/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";

const SongDetail = ({song}) => {
    if(!song){
        return <div>Select a song</div>
    }
  return (
    <div>
      <h3>Detailed for:</h3>
      <p>
        Title: {song.title}
        <br/> 
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToPops = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToPops)(SongDetail);
