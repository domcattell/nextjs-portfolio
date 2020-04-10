import React, {useContext} from 'react';
import styles from '../../styles/components/admin_navbar.module.scss';
import { Container, Row, Col, Form, Button, Navbar, Nav } from 'react-bootstrap';
import {AuthActions} from '../../context/contexts/auth.context';
import useToggle from '../../hooks/useToggle';
import NewProject from '../modals/NewProjects';



const AdminNavbar = () => {
    const {logout} = useContext(AuthActions);
    const [newProject, toggleNewProject] = useToggle(false)

	return (
		<Navbar className={`${styles.admin_navbar} d-flex justify-content-between border-bottom`}> 
			<Navbar.Brand className={styles.admin_navbar__header}>Dominic Cattell</Navbar.Brand>
			<Nav>
                <Button onClick={toggleNewProject}>New Project</Button>
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="#home">Logout</Nav.Link>
			</Nav>
            <NewProject show={newProject} toggle={toggleNewProject}/>
		</Navbar>
	);
};

export default AdminNavbar;
