import React, { useContext, useEffect } from 'react';
import WithAuth from '../../HOC/auth.hoc';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminProjects from '../../components/admin/AdminProjects';

const dashboard = () => {
	return (
		<div style={{display: "flex", justifyContent: "center"}}>
			<AdminNavbar />
			<AdminProjects />
		</div>
	);
};

export default WithAuth(dashboard);
