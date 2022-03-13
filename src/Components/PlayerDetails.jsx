import React from "react";

const PlayerDetails = (props) => {

  return (
    <div className="player-details">
      <div className="details-image">
        <img src={props.song.img_src} title={props.song.artist} alt={props.song.artist} />
      </div>
      <h3 className="details-title">{props.song.title}</h3>
      <h4 className="details-artist">{props.song.artist}</h4>
    </div>
  );
};

export default PlayerDetails;