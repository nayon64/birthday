import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../asset/music/logo.jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReactAudioPlayer from "react-audio-player";
import music from "../../asset/music/music.mp3";

const Video = () => {
	const {name}=useContext(AuthContext)
	return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto relative overflow-hidden">
      <figure className="px-10 pt-10">
        <img src={image} alt="Rosy" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-red-600 text-4xl ">{name}</h2>
        <p className="font-mono text-3xl">Happy Birthday</p>
        <Link className="mt-6" to="/user">
          <button className="btn btn-primary">Back</button>
        </Link>
        <div className='absolute -bottom-16 after:'>
          <ReactAudioPlayer src={music} autoPlay controls />
        </div>
      </div>
    </div>
  );
};

export default Video;