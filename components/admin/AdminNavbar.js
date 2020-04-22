import React, { useContext } from 'react';
import styles from '../../styles/components/admin_navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewProject from '../modals/NewProjects';

import { AuthActions } from '../../context/contexts/auth.context';

import useToggle from '../../hooks/useToggle';

import NavbarBtn from '../layout/NavbarBtn';

const AdminNavbar = () => {
	const { logout } = useContext(AuthActions);
	const [ newProject, toggleNewProject ] = useToggle(false);

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__header}>
				<h4 className={styles.navbar__header__title}>Dashboard</h4>
			</div>
			<div className={styles.navbar__controls}>
				<NavbarBtn>
					<FontAwesomeIcon icon="home" />
				</NavbarBtn>
				<NavbarBtn onClick={toggleNewProject}>
					<FontAwesomeIcon icon="newspaper" />
				</NavbarBtn>
				<NavbarBtn>
					<FontAwesomeIcon icon="cog" />
				</NavbarBtn>
				<NavbarBtn>
					<FontAwesomeIcon icon="sign-out-alt" />
				</NavbarBtn>
				<NewProject show={newProject} toggle={toggleNewProject} />
			</div>
		</nav>
	);
};

export default AdminNavbar;

