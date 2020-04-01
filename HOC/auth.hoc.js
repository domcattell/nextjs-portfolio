import React, { useEffect, useContext } from 'react';
import { AuthContext, AuthActions } from '../context/contexts/auth.context';
import { useRouter } from 'next/router';

//a better approach to auth with next would be to use cookies
//and check if authenticated on the serverside first without
//using context, prevent a page flash, but for a personal project, this method fits fine
const WithAuth = (AuthComponent) => {
	return () => {
		const { checkAuth } = useContext(AuthActions);
		const { isAuthenticated } = useContext(AuthContext);
		const router = useRouter();

		useEffect(() => {
			checkAuth();
			!isAuthenticated && router.replace('/admin');
		}, []);

		return <div>{isAuthenticated ? <AuthComponent /> : <h4>Access denied</h4>}</div>;
	};
};

export default WithAuth;
