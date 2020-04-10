import React from 'react'
import { ProjectsProvider } from '../context/contexts/projects.context'
import { AuthProvider } from '../context/contexts/auth.context'
import '../styles/reset.css';
import '../styles/_custom_theme.scss';
import '../styles/quill_editor_custom.css';
// import 'react-quill/dist/quill.snow.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <ProjectsProvider>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ProjectsProvider> 
    )
}

export default MyApp