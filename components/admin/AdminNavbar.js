import React, { useContext } from 'react';
import styles from '../../styles/components/admin_navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewProject from '../modals/NewProjects';

import { AuthActions } from '../../context/contexts/auth.context';

import useToggle from '../../hooks/useToggle';

import DashboardButton from '../layout/DashboardButton';

const AdminNavbar = () => {
	const { logout } = useContext(AuthActions);
	const [ newProject, toggleNewProject ] = useToggle(false);

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__header}>
				<h4 className={styles.navbar__header__title}>Dashboard</h4>
			</div>
			<div className={styles.navbar__controls}>
				<DashboardButton style="large">
					<FontAwesomeIcon icon="home" />
				</DashboardButton>
				<DashboardButton style="large" onClick={toggleNewProject}>
					<FontAwesomeIcon icon="newspaper" />
				</DashboardButton>
				<DashboardButton style="large">
					<FontAwesomeIcon icon="cog" />
				</DashboardButton>
				<DashboardButton onClick={logout} style="large">
					<FontAwesomeIcon icon="sign-out-alt" />
				</DashboardButton>
				<NewProject show={newProject} toggle={toggleNewProject} />
			</div>
		</nav>
	);
};

export default AdminNavbar;

