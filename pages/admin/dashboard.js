import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Navbar, Nav } from 'react-bootstrap';
import Router from 'next/router';
import axios from 'axios';
import authToken from '../../helpers/authToken';

import styles from '../../styles/pages/dashboard_page.module.scss';
import AdminNavbar from '../../components/admin/AdminNavbar';
import NewProject from '../../components/modals/NewProjects';

import { AuthContext, AuthActions } from '../../context/contexts/auth.context';
import WithAuth from '../../HOC/auth.hoc';

const dashboard = () => {
	const { user, isAuthenticated } = useContext(AuthContext);
	const { checkAuth } = useContext(AuthActions);

	return (
		<div>
			<AdminNavbar />
			
		</div>
	);
};

export default WithAuth(dashboard);
