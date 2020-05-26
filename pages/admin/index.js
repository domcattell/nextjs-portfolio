import React, { useContext, useEffect } from 'react';
import Router from 'next/router';
import { AuthActions, AuthContext } from '../../context/contexts/auth.context';
import LoginForm from '../../components/admin/LoginPage/LoginForm';
import LoginHeader from '../../components/admin/LoginPage/LoginHeader';


const index = () => {
	const { checkAuth } = useContext(AuthActions);
	const { isAuthenticated } = useContext(AuthContext);

	isAuthenticated && Router.push('/admin/dashboard');

	useEffect(() => {
		checkAuth();
	}, []);

	return (
		<>
			<LoginHeader text="Dominic Cattell"/>
			<LoginForm />
		</>
	);
};

export default index;
