import React from 'react';
import styles from '../../styles/components/admin_project.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashboardButton from '../layout/DashboardButton';
import useToggle from '../../hooks/useToggle';
import EditProject from '../modals/EditProject';

const AdminProject = (props) => {
	const [editProject, toggleEditProject] = useToggle(false);

	return (
		<div className={styles.project}>
			<img className={styles.project__bg} src={props.img} alt="project image" />
			<div className={styles.project__toolbar}>
				<DashboardButton>
					<FontAwesomeIcon icon="link" />
					<h5 className={styles.project__header}>{props.title}</h5>
				</DashboardButton>
				<div className={styles.project__toolbar__controls}>
					<DashboardButton onClick={toggleEditProject}>
						<FontAwesomeIcon icon="pen-square" />
					</DashboardButton>
					<DashboardButton>
						<FontAwesomeIcon icon="trash" />
					</DashboardButton>
					{editProject && <EditProject show={editProject} toggle={toggleEditProject} url={props.url} title={props.title}/>}
				</div>
			</div>
		</div>
	);
};

export default AdminProject;
