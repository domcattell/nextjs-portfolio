import React from 'react';
import styles from '../../styles/components/admin_project.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashboardButton from '../layout/DashboardButton';
import useToggle from '../../hooks/useToggle';
import EditProject from '../modals/EditProject';
import DeleteProject from '../modals/DeleteProject';

const AdminProject = (props) => {
	const [ editModal, toggleEditModal ] = useToggle(false);
	const [ deleteModal, toggleDeleteModal ] = useToggle(false);

	return (
		<div className={styles.project}>
			{editModal && <EditProject show={editModal} toggle={toggleEditModal} url={props.url} title={props.title} />}
			{deleteModal && (<DeleteProject show={deleteModal} toggle={toggleDeleteModal} url={props.url} title={props.title} />)}
			<div className={styles.project__bg}>
				<img src={props.img} alt="project image" />
			</div>
			<div className={styles.project__toolbar}>
				<div className={styles.project__header}>
					<a href="#" className={styles.project__title}>
						{props.title}
					</a>
				</div>
				<section className={styles.project__info}>
					<p className={styles.project__desc}>{props.description}</p>
				</section>
				<div className={styles.project__controls}>
					<DashboardButton onClick={toggleEditModal}>
						<FontAwesomeIcon icon="pen-square" />
					</DashboardButton>
					<DashboardButton onClick={toggleDeleteModal}>
						<FontAwesomeIcon icon="trash" />
					</DashboardButton>
				</div>
			</div>
		</div>
	);
};

export default AdminProject;
