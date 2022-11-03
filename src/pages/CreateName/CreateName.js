import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const CreateName = () => {
	const {name, setName } = useContext(AuthContext)
	const navigate = useNavigate();
	const handleName = e => {
		e.preventDefault()
		const form = e.target;
		const value = form.name.value;
		setName(value)
		navigate("/confirmdname");
	}
	return (
    <div className="">
      <form onSubmit={handleName} className="flex items-center flex-col text-center">
        <div className="form-control max-w-sm mx-5 mt-20">
          <label className="label">
            <span className="label-text">Enter your name</span>
          </label>
          <input
            type="text"
            name="name"
			defaultValue={name}
            placeholder="Enter your name"
            className="input input-bordered mb-10"
          />
        </div>
		<input className='btn btn-primary' type="submit" value="Set Name" />
      </form>
    </div>
  );
};

export default CreateName;