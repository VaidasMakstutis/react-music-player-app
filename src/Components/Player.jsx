import React, { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import songs from "../Data/songs";

const Player = props => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
      console.log("Duration: ", (audioElement.current.duration / 60).toFixed(), (audioElement.current.duration % 60).toFixed());
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  const stopSong = () => {
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
  };

  const skipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  const clickHandler = id => {
    props.setCurrentSongIndex(id - 1);
    console.log(id);
  };

  const doubleClickHandler = () => {
    stopSong();
    audioElement.current.play();
  };

  return (
    <div className="player">
      <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>
      <h3>Playing now</h3>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} stopSong={stopSong} />
      
      <div className="container-songs-list">
        <select multiple size={songs.length}>
          {songs.map((item, key) => (
            <option key={item.id} onClick={() => clickHandler(item.id)} onDoubleClick={() => doubleClickHandler()}>
              {item.id}.{item.title}
            </option>
          ))}
        </select>
      </div>
      
    </div>
  );
};

export default Player;
