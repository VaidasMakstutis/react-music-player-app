import React, { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import Search from "./Search";
import songs from "../Data/songs";
// const { getAudioDurationInSeconds } = require('get-audio-duration');

const Player = props => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);
  
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
      // console.log("Duration: ", (audioElement.current.duration / 60).toFixed(), (audioElement.current.duration % 60).toFixed());
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);
  
  // useEffect(() => {
  //   songs.forEach(element => {
  //     getAudioDurationInSeconds(element.src).then((duration) => {
  //       console.log(duration);
  //     })
  //   });
  // }, []);

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
  };

  const doubleClickHandler = () => {
    stopSong();
    audioElement.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="player">
      <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} stopSong={stopSong} />

      <div className="container-songs-list">
        <select multiple size={songs.length}>
          {
          filteredSongs.length ? filteredSongs.map((id) => (
            <option key={songs[id].id} onClick={() => clickHandler(songs[id].id)} onDoubleClick={() => doubleClickHandler()}>
              {songs[id].id}.{songs[id].title}
            </option>
          ))
          :
          songs.map((item) => (
            <option key={item.id} onClick={() => clickHandler(item.id)} onDoubleClick={() => doubleClickHandler()}>
              {item.id}.{item.title}
            </option>
          ))
          }
        </select>
      </div>
      <Search setFilteredSongs={setFilteredSongs} search={search} setSearch={setSearch}/>
    </div>
  );
};

export default Player;