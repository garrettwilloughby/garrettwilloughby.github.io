import React from 'react';
import CardComponent from '../../components/card/card';
import resumeData from '../../content/resumeData';


function Projects() {
  return (
    <div className="container text-center min-vh-100 align-items-center">
      <h1>PROJECTS</h1>
      <CardComponent cards={resumeData.projects}/>
    </div>
  );
}

export default Projects;