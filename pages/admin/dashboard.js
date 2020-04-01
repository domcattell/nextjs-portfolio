import React, {useContext, useEffect} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Router from 'next/router'
import axios from 'axios'
import authToken from '../../helpers/authToken';

import {AuthContext, AuthActions} from '../../context/contexts/auth.context';
import WithAuth from '../../HOC/auth.hoc'

const dashboard = () => {
	const {user, isAuthenticated} = useContext(AuthContext);
	const {checkAuth} = useContext(AuthActions);
	
	return (
		<div>
			<h4>Hello from dashboard</h4>
		</div>
	);
};

export default WithAuth(dashboard);
