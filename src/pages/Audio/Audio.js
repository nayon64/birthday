import React from 'react';
import ReactAudioPlayer from "react-audio-player";
import { Link } from 'react-router-dom';
import music from "../../asset/music/music.mp3";

const Audio = () => {
	return (
    <div className="card w-96 bg-gray-400 text-neutral-content mx-auto mt-6">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Gift for you</h2>
        <ReactAudioPlayer src={music} autoPlay controls />
        <Link className='mt-6' to="/user">
          <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    </div>
  );
};
;

export default Audio;