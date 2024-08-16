import React from 'react';
import resumeData from '../../content/resumeData';

function About() {
    return (
      <div className="px-5 d-flex flex-column justify-content-center min-vh-100 border">
        <div className="text-left">
          <h1 className="font-bold">ABOUT ME</h1>
          <p className="px-5">
            {resumeData.about.data}
          </p>
          <img src="src/assets/images/me.jpeg" alt="picture of me" />
        </div>
      </div>
    );
  }
  

export default About;