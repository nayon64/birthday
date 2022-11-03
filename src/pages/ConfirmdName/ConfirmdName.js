import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ConfirmdName = () => {
	const {name}=useContext(AuthContext)
	return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md ">
          <h1 className="text-3xl font-bold my-10">
            Your Are <br /> <span className="text-rose-600">{name}</span>
          </h1>

          <div className="flex justify-evenly ">
            <Link to="/user">
              <button className="btn btn-success text-2xl font-bold mr-5">
                Yes
              </button>
            </Link>
            <Link to="/createname">
              <button className="btn btn-warning text-2xl font-bold">No</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmdName;