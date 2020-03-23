import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import useInputState from '../../hooks/useInputState';

import styles from '../../styles/login.module.scss';
import axios from 'axios';

const index = () => {
	const [user, handleChange] = useInputState("");

	const login = async (e) => {
		e.preventDefault();
		const res =  await axios.post("http://localhost:3000/api/admin/login", user)
		console.log(res.data)
	}

	return (
		<div>
		<Container className={styles.login__form}>
		<Container>
			<h4 className="text-center">Login</h4>
		</Container>
			<Row>
				<Col>
				<Form onSubmit={login}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" placeholder="Username" name="username" value={user.username || ""} onChange={handleChange} />
							<Form.Text className="text-muted" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" name="password" value={user.password || ""} onChange={handleChange} />
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
