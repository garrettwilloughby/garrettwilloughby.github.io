import React from 'react';
import resumeData from '../../content/resumeData';
import styles from "./about.module.css";
import me from '../../assets/images/me.jpeg'; // Import the image
import FadeInSection from '../../components/fade/fade-in';

function About() {
  return (
    <FadeInSection>
    <div className="container px-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-75">
        {/* Text Column */}
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
          <h1 className="font-bold">ABOUT ME</h1>
          <p className="px-lg-0 px-5">
            {resumeData.about.data}
          </p>
        </div>

        {/* Image Column */}
        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-lg-0 mt-4">
          <img className={`${styles.picture}`} src={me} alt="picture of me" />
        </div>
      </div>
    </div>
    </FadeInSection>
  );
}


export default About;