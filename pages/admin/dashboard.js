import React from 'react';
import WithAuth from '../../HOC/auth.hoc';
import AdminNavbar from '../../components/admin/Nav/AdminNavbar';
import AdminProjects from '../../components/admin/Projects/AdminProjects';

const dashboard = () => {
	return (
		<>
			<AdminNavbar />
			<AdminProjects />
		</>
	);
};

export default WithAuth(dashboard);
