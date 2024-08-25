import React from 'react';
import CardComponent from '../../components/card/card';
import resumeData from '../../content/resumeData';
import FadeInSection from '../../components/fade/fade-in';


function Projects() {
  return (
    <FadeInSection>
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 border">
      <div className="w-100">
        <h1 className="px-5 pb-5 text-left">PROJECTS</h1>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <CardComponent cards={resumeData.projects} />
      </div>
    </div>
    </FadeInSection>
  );
}

export default Projects;