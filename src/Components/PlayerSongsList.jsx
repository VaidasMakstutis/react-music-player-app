import React from "react";
import songs from "../Data/songs";

const PlayerSongsList = () => {
  // console.log([songs]);
  return (
    <div className="list-items">
      {
      songs.map((item, key) => (
        <tr key={item.id}>
          <td>{item.id}.</td>
          <td>{item.title}</td>
        </tr>
      ))
      }
    </div>
  );
};

export default PlayerSongsList;