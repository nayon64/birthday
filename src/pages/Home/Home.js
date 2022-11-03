import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
				<h1 className="text-5xl font-bold">WELCOME</h1>
				<p className="py-6 text-3xl">Is your birthday today ?</p>
				<div className="flex justify-evenly ">
					<Link to="/confirmdname">
					<button className="btn btn-success text-2xl font-bold">
						Yes
					</button>
					</Link>
					<Link to="/flase">
					<button className="btn btn-warning text-2xl font-bold">No</button>
					</Link>
				</div>
				</div>
			</div>
		</div>
  );
};

export default Home;