import React from 'react';
import resumeData from '../../content/resumeData';
import styles from "./about.module.css";
import me from '../../assets/images/me.jpeg'; // Import the image
import FadeInSection from '../../components/fade/fade-in';

function About() {
  // Example list of languages you know
  const languages = [
    'JavaScript', 'Python', 
    'Java', 'C#', 
    'C++', 'TypeScript', 
    'HTML', 'CSS'
  ];

  // Split the languages into two columns
  const midIndex = Math.ceil(languages.length / 2);
  const firstColumn = languages.slice(0, midIndex);
  const secondColumn = languages.slice(midIndex);

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

           {/* Hardskills */}
           <div className="row w-75 mt-4">
          <h2 className="font-bold">Languages I Know</h2>
          <div className="d-none d-lg-flex col-lg-6">
            <ul>
              {firstColumn.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className="d-none d-lg-flex col-lg-6">
            <ul>
              {secondColumn.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          {/* Single Column for Mobile */}
          <div className="d-block d-lg-none col-12">
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
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