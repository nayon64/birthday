import React from 'react';
import { Link } from 'react-router-dom';



const User = () => {
	return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title text-3xl text-rose-600 font-semibold">Special Gift For You!</h2>
        <p className='text-2xl mb-6'>Please select any option.</p>
        <div className="card-actions justify-center">
          <Link to="/music">
            <button className="btn btn-primary">Option-1</button>
          </Link>
          <Link to="/video">
            <button className="btn btn-primary">Option-2</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;