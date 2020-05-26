import React from 'react';
import { ProjectsProvider } from '../context/contexts/projects.context';
import { AuthProvider } from '../context/contexts/auth.context';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faNewspaper,
	faCog,
	faSignOutAlt,
	faHome,
	faExternalLinkAlt,
	faPenSquare,
	faTrash,
	faLink,
	faAt,
	faSmile,
	faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { toast, Slide } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/utils/reset.css';
import '../styles/utils/_custom_bootstrap_theme.scss';
import '../styles/utils/_custom_toastify.css'
import '../styles/utils/_custom_quill_editor.css';

toast.configure({
	hideProgressBar: true,
	autoClose: 3000,
	transition: Slide,
});

function MyApp({ Component, pageProps }) {
	library.add(fab, faUserPlus, faCog, faSignOutAlt, faHome, faNewspaper, faExternalLinkAlt, faPenSquare, faTrash, faLink, faAt, faSmile);

	return (
		<ProjectsProvider>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ProjectsProvider>
	);
}

export default MyApp;
