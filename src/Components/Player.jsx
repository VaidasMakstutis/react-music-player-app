import React, { useState, useEffect, useRef } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import PlayerSongsList from "./PlayerSongsList";

const Player = (props) => {

  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
      if (isPlaying) {
          audioElement.current.play();
      } else {
          audioElement.current.pause();
      }
  });
  
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
  }
  
      return (
          <div className="player">
              <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>
              <h3>Playing now</h3>
              <PlayerDetails song={props.songs[props.currentSongIndex]} />
              <PlayerControls 
              isPlaying={isPlaying} 
              setIsPlaying={setIsPlaying} 
              skipSong={skipSong} 
              />
              <PlayerSongsList />
          </div>
      )
  }

export default Player;