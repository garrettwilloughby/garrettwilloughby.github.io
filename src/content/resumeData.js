let resumeData = {
    about:{
      data: "Hi! My name is Garrett Willoughby. I am from Hamden, Connecticut. I am a senior at the University of Connecticut pursuing a Bachelor's of Engineering in Computer Science and Engineering with a minor in Math."
    },
    projects:[
      { title: 'Learn Chinese!', text: 'Flashcard App made using React, Django and PostgreSQL' },
      { title: 'UCONN Course Registration Clone', text: 'Webapp made using Vue and AWS' },
      { title: 'This website', text: 'Webapp made using React' },
    ],
    jobs: [
      {
        expData: {
          company: "UCONN College of Engineering",
          position: "Introduction to Software Engineering Teaching Assistant",
          period: "August 2024 - Present",
          details: [
            "Currently a Teaching Assistant for CSE 2102 - Introduction to Software Engineering",
            "Lead labs where students are assisted in learning technologies such as Git, Docker and Figma",
            "Aid in teaching concepts such as branching strategies and CI/CD"
          ]
        }
      },
      {
        expData: {
          company: "Hubbell",
          position: "Software Engineer Intern",
          period: "May 2024 - August 2024",
          details: [
            "Revised .NET API endpoints to facilitate seamless data integration and communication between front-end, back-end as well as data provider.",
            "Assisted in the development of a responsive and user-friendly front end using Angular, enhancing user interaction and experience.",
            "Implemented Terraform scripts to automate the provisioning and management of infrastructure, ensuring consistent and reproducible environments."
          ]  
        }
      },
      {
        expData: {
          company: "UCONN Research",
          position: "Software Engineer",
          period: "Nov 2023 - Present",
          details: [
            "Developing the P3-EX web application using Next.js and Django backend for prescribing exercises to cardiovascular patients.",
            "Collaborated with healthcare professionals and researchers to implement intuitive user interfaces tailored to industry needs.",
            "Implemented RESTful APIs to connect the front-end with the Django backend facilitating a smooth exchange of patient data and exercise prescriptions within the application."
          ]
        }
      },
      {
        expData: {
          company: "Atlantic Fabrication",
          position: "Intern",
          period: "May 2023 - August 2023",
          details: [
            "Utilized SQL to generate reports by creating queries to provide insights for data driven decision making.",
            "Supported the implementation of an ERP system and created a training program to help team members navigate the system efficiently.",
            "Created a Customer Relationship Management (CRM) in Excel using VBA to enhance communication efficiency and tracking."
          ]
        }
      }
    ]
  };
  
  export default resumeData;
  