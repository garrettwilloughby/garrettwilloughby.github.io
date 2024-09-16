import React from 'react';
import resumeData from '../../content/resumeData';
import styles from "./about.module.css";
import me from '../../assets/images/me.jpeg'; // Import the image
import FadeInSection from '../../components/fade/fade-in';

function About() {
  // Example list of languages you know
  const languages = [
    'JavaScript', 'Python', 
    'Java', 'Terraform', 
    'C++', 'TypeScript', 
    'HTML', 'CSS', 
    'React', 'Azure'
  ];

  // Split the languages into two columns
  const midIndex = Math.ceil(languages.length / 2);
  const firstColumn = languages.slice(0, midIndex);
  const secondColumn = languages.slice(midIndex);

  return (
    <FadeInSection>
      <div className={`container px-5 d-flex justify-content-center align-items-center min-vh-100`}>
        <div className="row">
          {/* Text Column */}
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
            <h1 className={`font-bold ${styles.aboutmetitle}`}>ABOUT ME</h1>
            <p className={`px-lg-0 ${styles.aboutmetext}`} >
              {resumeData.about.intro}
              <br></br>
              <br></br>
              {resumeData.about.hobbies}
            </p>

           {/* Hardskills */}
           <div className="row w-100 mt-1 justify-content-center"> 
            {/* fix this centering soon! */}
          <p className={`${styles.aboutmetext}`}>Here are some of the languages and technology I've worked with recently:</p>
          
          <div className={`d-lg-flex col-lg-6 w-50 ${styles.font}`}>
            <ul>
              {firstColumn.map((language, index) => (
                <li className={`${styles.aboutli}`} style={{ listStyle: "none"}} key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className={`d-lg-flex col-lg-6 w-50 ${styles.font}`}>
            <ul>
              {secondColumn.map((language, index) => (
                <li className={`${styles.aboutli}`} style={{ listStyle: "none"}} key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>

            
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