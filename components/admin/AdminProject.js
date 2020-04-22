import React from 'react';
import styles from '../../styles/components/admin_project.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashboardButton from '../layout/DashboardButton';

const AdminProject = (props) => {
	return (
		<div className={styles.project}>
			<img className={styles.project__bg} src={props.img} alt="project image" />
			<div className={styles.project__toolbar}>
				<DashboardButton>
					<FontAwesomeIcon icon="link" />
					<h5 className={styles.project__header}>{props.title}</h5>
				</DashboardButton>
				<div className={styles.project__toolbar__controls}>
					<DashboardButton>
						<FontAwesomeIcon icon="pen-square" />
					</DashboardButton>
					<DashboardButton>
						<FontAwesomeIcon icon="trash" />
					</DashboardButton>
				</div>
			</div>
		</div>
	);
};

export default AdminProject;
