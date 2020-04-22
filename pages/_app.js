import React from 'react';
import { ProjectsProvider } from '../context/contexts/projects.context';
import { AuthProvider } from '../context/contexts/auth.context';
import '../styles/reset.css';
import '../styles/_custom_theme.scss';
import '../styles/quill_editor_custom.css';
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
} from '@fortawesome/free-solid-svg-icons';
// import 'react-quill/dist/quill.snow.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
	library.add(fab, faCog, faSignOutAlt, faHome, faNewspaper, faExternalLinkAlt, faPenSquare, faTrash, faLink, faAt, faSmile);

	return (
		<ProjectsProvider>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ProjectsProvider>
	);
}

export default MyApp;
