import React from 'react';
import resumeData from '../../content/resumeData';
import styles from "./about.module.css"
import me from '../../assets/images/me.jpeg'; // Import the image

function About() {
    return (
      <div className="px-5 d-flex flex-column justify-content-center min-vh-100 border">
        <div className="text-left">
          <h1 className="font-bold">ABOUT ME</h1>
          <p className="px-5">
            {resumeData.about.data}
          </p>
          <img className={`${styles.picture}`} src={me} alt="picture of me" /> {/* Use the imported image */}
        </div>
      </div>
    );
}

export default About;