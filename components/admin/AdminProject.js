import React from 'react';
import styles from '../../styles/components/admin_project.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminProject = (props) => {
	return (
		<div className={styles.project}>
			<img className={styles.project__bg} src={props.img} alt="project image" />
			<div className={styles.project__toolbar}>
				<button className={styles.project__toolbar__link}>
					<FontAwesomeIcon icon="link" />
					<h5 className={styles.project__header}>{props.title}</h5>
				</button>
				<div className={styles.project__toolbar__controls}>
					<button className={styles.project__toolbar__control}>
						<FontAwesomeIcon icon="pen-square" />
					</button>
					<button className={styles.project__toolbar__control}>
						<FontAwesomeIcon icon="trash" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminProject;
