import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/components/admin_pages.module.scss';

const AdminPages = () => {
	return (
		<div className={styles.pages}>
			<h5 className={styles.pages__header}>Pages</h5>
			<ul className={styles.pages__list}>
				<li className={styles.pages__list__item}>
					<a className={styles.pages__link} href="/home">
						<FontAwesomeIcon className={styles.pages__icon} icon="home" />Home
					</a>
				</li>
				<li className={styles.pages__list__item}>
					<a className={styles.pages__link} href="#">
						<FontAwesomeIcon className={styles.pages__icon} icon="at" />Contact
					</a>
				</li>
				<li className={styles.pages__list__item}>
					<a className={styles.pages__link} href="#">
						<FontAwesomeIcon className={styles.pages__icon} icon="smile" />About
					</a>
				</li>
                <li className={styles.pages__list__item}>
					<a className={styles.pages__link} href="#">
						<FontAwesomeIcon className={styles.pages__icon} icon={['fab', 'linkedin']} />Linkedin
					</a>
				</li>
                <li className={styles.pages__list__item}>
					<a className={styles.pages__link} href="#">
						<FontAwesomeIcon className={styles.pages__icon} icon={['fab', 'github']} />Github
					</a>
				</li>
			</ul>
		</div>
	);
};

export default AdminPages;
