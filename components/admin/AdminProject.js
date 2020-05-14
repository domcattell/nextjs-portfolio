import React from 'react';
import styles from '../../styles/components/admin_project.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashboardButton from '../layout/DashboardButton';
import useToggle from '../../hooks/useToggle';
import EditProject from '../modals/EditProject';
import DeleteProject from '../modals/DeleteProject';

const AdminProject = (props) => {
	const [editModal, toggleEditModal] = useToggle(false);
	const [deleteModal, toggleDeleteModal] = useToggle(false);

	return (
		<div className={styles.project}>
			<img className={styles.project__bg} src={props.img} alt="project image" />
			<div className={styles.project__toolbar}>
				<DashboardButton>
					<FontAwesomeIcon icon="link" />
					<h5 className={styles.project__header}>{props.title}</h5>
				</DashboardButton>
				<div className={styles.project__toolbar__controls}>
					<DashboardButton onClick={toggleEditModal}>
						<FontAwesomeIcon icon="pen-square" />
					</DashboardButton>
					<DashboardButton onClick={toggleDeleteModal}>
						<FontAwesomeIcon icon="trash" />
					</DashboardButton>
					{editModal && <EditProject show={editModal} toggle={toggleEditModal} url={props.url} title={props.title}/>}
					{deleteModal && <DeleteProject show={deleteModal} toggle={toggleDeleteModal} url={props.url} title={props.title}/>}
				</div>
			</div>
		</div>
	);
};

export default AdminProject;
