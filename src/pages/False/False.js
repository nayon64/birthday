import React from 'react';
import { Link } from 'react-router-dom';

const False = () => {
	return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-6">
      <div className="card-body">
        <p className='text-3xl text-red-500 text-center font-semibold'>I don't believe that today is not your birthday!!</p>
        <div className="card-actions justify-center mt-6">
          <Link to="/">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default False;