
import "./MoodSongs.css";

const MoodSongs = ({Songs}) => {
  if (!Array.isArray(Songs)) {
    return <div>No songs found.</div>;
  }

  return (
    <div className='mood-songs'>
      <h2>Recommended Songs</h2>
      {
        Songs.map((song, index) => (
          <div key={index} className="song-card">
            <div className="title">
              <div className='songs-sections'>
                <h3>{song.title}</h3>
              <p>{song.artist}</p>
              </div>
               <audio src={song.audio} controls></audio>
              <div className="play-pause-button">
              <i className="ri-play-line"></i>
              <i className="ri-pause-line"></i>
            </div>
            </div>
            
          </div>
        ))
      }
    </div>
  );
};

export default MoodSongs;