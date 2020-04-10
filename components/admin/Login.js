import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

import useInputState from '../../hooks/useInputState';
import useToggle from '../../hooks/useToggle';

import { AuthActions, AuthContext } from '../../context/contexts/auth.context';

import styles from '../../styles/components/login.module.scss';

const Login = () => {
	const [ user, handleChange ] = useInputState('');
	const [ alert, showAlert ] = useToggle(true);

	const { authMsgs } = useContext(AuthContext);
	const { loginUser } = useContext(AuthActions);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await loginUser(user);
		!alert && showAlert();
	};

	return (
		<Container className={`${styles.login__form} d-flex flex-column`}>
			{authMsgs && (
				<Row className="justify-content-md-center">
					<Col lg={5}>
						<Alert variant="warning">{authMsgs}</Alert>
					</Col>
				</Row>
			)}
			<Row className="justify-content-md-center">
				<Col>
					<h4 className={styles.login__header}>Login</h4>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col lg={5}>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label className={styles.login__label}>Username</Form.Label>
							<Form.Control
								size="lg"
								type="text"
								name="username"
								value={user.username || ''}
								onChange={handleChange}
							/>
							<Form.Text className="text-muted" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label className={styles.login__label}>Password</Form.Label>
							<Form.Control
								size="lg"
								type="password"
								name="password"
								value={user.password || ''}
								onChange={handleChange}
							/>
						</Form.Group>
						<Button size="lg" variant="primary" type="submit" block>
							Login
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
