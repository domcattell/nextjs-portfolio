import React from 'react'
import { ProjectsProvider } from '../context/contexts/projects.context'
import { AuthProvider } from '../context/contexts/auth.context'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/reset.css';

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