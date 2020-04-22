import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Navbar, Nav } from 'react-bootstrap';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/pages/dashboard_page.module.scss';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminProject from '../../components/admin/AdminProject';
import AdminPages from '../../components/admin/AdminPages';

import { ProjectsContext, ProjectsActions } from '../../context/contexts/projects.context';
import WithAuth from '../../HOC/auth.hoc';

const dashboard = () => {
	const { getProjects } = useContext(ProjectsActions);
	const { projects } = useContext(ProjectsContext);

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<div className={styles.dashboard}>
			<AdminNavbar />

			<div className={styles.dashboard__projects_container}>
				<AdminPages />
				<div className={styles.dashboard__projects} id={styles.scrollbar}>
					<div className={styles.dashboard__projects__header}>
						<h5 className={styles.dashboard__projects__title}>Projects</h5>
						<button className={styles.dashboard__projects__btn}>+ New Project</button>
					</div>
					{projects.map((project) => (
						<AdminProject key={project._id} title={project.title} img={project.projectImg} />
					))}
				</div>
			</div>
		</div>
	);
};

export default WithAuth(dashboard);
