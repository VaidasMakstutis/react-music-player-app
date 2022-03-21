import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";

const PlayerControls = (props) => {
    return (
        <div className="player-controls">
            <button className="skip-btn" onClick={() => props.skipSong(false)}>
                <FontAwesomeIcon icon={faBackward} title="Previous song" />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} title="Play/Pause" />
            </button>
            <button className="stop-btn" onClick={props.stopSong}>
                <FontAwesomeIcon icon={faStop} title="Stop" />
            </button>
            <button className="skip-btn" onClick={() => props.skipSong()}>
                <FontAwesomeIcon icon={faForward} title="Next song" />
            </button>
        </div>
    )
}

export default PlayerControls;