import React from 'react'
import {ProjectsProvider} from '../context/contexts/projects.context'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/reset.css';

function MyApp({ Component, pageProps }) {
    return (
        <ProjectsProvider>
            <Component {...pageProps} />
        </ProjectsProvider>
    )
  }
  
  export default MyApp