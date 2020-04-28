import React, { useEffect, useContext } from 'react';
import { ProjectsContext, ProjectsActions } from '../../context/contexts/projects.context';
import DashboardButton from '../layout/DashboardButton';
import AdminPages from '../admin/AdminPages';
import AdminProject from '../admin/AdminProject';
import styles from '../../styles/components/admin_projects.module.scss';

const AdminProjects = () => {
	const { getProjects } = useContext(ProjectsActions);
	const { projects } = useContext(ProjectsContext);

	useEffect(() => {
		getProjects();
	},[]);

	return (
		<div className={styles.projects}>
			<AdminPages />
			<div className={styles.projects__container} id={styles.scrollbar}>
				<div className={styles.projects__header}>
					<h5 className={styles.projects__title}>Projects</h5>
					<DashboardButton style="alternative">+ New Project</DashboardButton>
				</div>
				{projects.map((project) => (
					<AdminProject key={project._id} title={project.title} img={project.projectImg} />
				))}
			</div>
		</div>
	);
};

export default AdminProjects;
