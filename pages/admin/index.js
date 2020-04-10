import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Router from 'next/router';

import { AuthActions, AuthContext } from '../../context/contexts/auth.context';
import Login from '../../components/admin/Login';

import styles from '../../styles/pages/login_page.module.scss';

const index = () => {
	const { checkAuth } = useContext(AuthActions);
	const { isAuthenticated } = useContext(AuthContext);

	isAuthenticated && Router.push('/admin/dashboard');

	useEffect(() => {
		checkAuth();
	}, []);

	return (
		<div className={styles.login_page}>
			<div className={styles.login_page__header_container}>
				<h5 className={styles.login_page__header}>
					Dominic Cattell
					<span className={styles.login_page__sub_heading}>CMS</span>
				</h5>
			</div>
			<Login />
		</div>
	);
};

export default index;
