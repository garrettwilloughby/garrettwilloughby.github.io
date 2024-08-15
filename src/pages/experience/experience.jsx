import React, { useState } from 'react';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState('job1');

  const experiences = {
    job1: {
      title: "Software Engineer at Company A",
      description: "Worked on building scalable web applications...",
      date: "Date"
    },
    job2: {
      title: "Frontend Developer at Company B",
      description: "Focused on creating responsive and interactive UIs...",
      date: "Date"
    },
    job3: {
      title: "Intern at Company C",
      description: "Assisted with software development and testing...",
      date: "Date"
    },
  };

  return (
    <div className='d-flex min-vh-100'>
      <div className='border d-flex flex-column'>
        {Object.keys(experiences).map((key) => (
          <button key={key} onClick={() => setSelectedExperience(key)}>
            {experiences[key].title}
          </button>
        ))}
      </div>
      <div className='border'>
        <h2>{experiences[selectedExperience].title}</h2>
        <p>{experiences[selectedExperience].date}</p>
        <p>{experiences[selectedExperience].description}</p>
      </div>
    </div>
  );
};

export default Experience;