import React, { createContext, useState } from 'react';

export const AuthContext=createContext()

const AuthProvider = ({ children }) => {
	const [name, setName] = useState("Tahmina Yasmin");
	const authInfo = { name, setName };
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;