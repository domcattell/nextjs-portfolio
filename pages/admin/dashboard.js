import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Navbar, Nav } from 'react-bootstrap';
import Router from 'next/router';
import axios from 'axios';
import authToken from '../../helpers/authToken';

import styles from '../../styles/pages/dashboard_page.module.scss';
import AdminNavbar from '../../components/admin/AdminNavbar';
import NewProject from '../../components/modals/NewProjects';

import {ProjectsContext, ProjectsActions} from '../../context/contexts/projects.context';
import WithAuth from '../../HOC/auth.hoc';

const dashboard = () => {
	const {getProjects} = useContext(ProjectsActions);
	const {projects} = useContext(ProjectsContext);

	useEffect(() => {
		getProjects();
	},[]);

	console.log(projects);

	return (
		<div>
			<AdminNavbar />
			
		</div>
	);
};

export default WithAuth(dashboard);
