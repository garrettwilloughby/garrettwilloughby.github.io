import React from 'react';
import CardComponent from '../../components/card/card';
import resumeData from '../../content/resumeData';
import FadeInSection from '../../components/fade/fade-in';
import styles from './projects.module.css'


function Projects() {
  return (
    <FadeInSection>
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="w-75">
        <h1 className="pb-5 text-left">PROJECTS</h1>
      </div>
      <div className="w-75 d-flex justify-content-center">
        <CardComponent cards={resumeData.projects} />
      </div>
    </div>
    </FadeInSection>
  );
}

export default Projects;