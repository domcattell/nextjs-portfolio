import React from 'react';
import axios from 'axios';

const Index = ({ projects }) => {

    
    return (
        <div>
            <h4></h4>
        </div>
    );
}

export async function getStaticProps(context) {
    const res = await axios.get("http://localhost:3000/api/projects")
    const projects = res.data

    return {
      props: {projects},
    }
  } 

export default Index;
