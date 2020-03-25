import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Router from 'next/router';

import useInputState from '../../hooks/useInputState';

import { AuthActions, AuthContext } from '../../context/contexts/auth.context';

import styles from '../../styles/login.module.scss';
import axios from 'axios';

const index = (props) => {
	const [user, handleChange] = useInputState('');

	const { checkAuth, loginUser } = useContext(AuthActions);
	const { isAuthenticated, authMsgs } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		loginUser(user);
	};

	isAuthenticated && Router.push('/admin/dashboard');

	return (
		<div>
			<Container className={styles.login__form}>
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
