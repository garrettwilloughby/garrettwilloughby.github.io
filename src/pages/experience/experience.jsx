import React, { useState } from 'react';
import styles from './experience.module.css';
import resumeData from '../../content/resumeData';
import VerticalTab from '../../components/vertical tabs/vertical-tab';
import FadeInSection from '../../components/fade/fade-in';


const Experience = () => {

  return (
    <FadeInSection>
    <div className="px-5 d-flex flex-column justify-content-center min-vh-100 border">
      <div className='border max-width-25'>
      <h1 className="px-m font-bold text-left text-xl">EXPERIENCE</h1>
      <VerticalTab data={resumeData.jobs} />
      </div>
    </div>
    </FadeInSection>
  );
};

export default Experience;