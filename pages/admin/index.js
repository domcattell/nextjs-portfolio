import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Router from 'next/router';

import WithAuth from '../../HOC/auth.hoc'

import useInputState from '../../hooks/useInputState';
import useToggle from '../../hooks/useToggle';

import { AuthActions, AuthContext } from '../../context/contexts/auth.context';

import styles from '../../styles/login.module.scss';

const index = (props) => {
	const [user, handleChange] = useInputState('');
	const [alert, showAlert] = useToggle(true);

	const { checkAuth, loginUser } = useContext(AuthActions);
	const { isAuthenticated, authMsgs } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await loginUser(user);
		!alert && showAlert();
	};
	
	isAuthenticated && Router.push('/admin/dashboard');

	useEffect(() => {
		checkAuth()
		console.log("hhfdhdf")
	}, []);

	return (
		<div>
			<Container className={styles.login__form}>
				{authMsgs && (
					<Alert show={alert} variant="danger" onClose={showAlert} dismissible>
						{authMsgs}
					</Alert>
				)}
				<Container>
					<h4 className="text-center">Login</h4>
				</Container>
				<Row>
					<Col>
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="text"
									placeholder="Username"
									name="username"
									value={user.username || ''}
									onChange={handleChange}
								/>
								<Form.Text className="text-muted" />
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									name="password"
									value={user.password || ''}
									onChange={handleChange}
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Login
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default index;
