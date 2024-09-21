let resumeData = {
    about:{
      intro: "Hi! My name is Garrett Willoughby. \
      I'm from Hamden, Connecticut. \
      I'm a senior at the University of Connecticut pursuing a Bachelor's of Science in Computer Science with a minor in Math. \
      This past summer I was a Software Engineer Intern at Hubbell! I've also worked at Atlantic Fabricating Company and have held a couple software related jobs at UConn.",
      hobbies: "At UConn, I'm apart of the Cantonese and Vietnamese student associations, the fishing and outing clubs, and play intramural volleyball. I'm also a huge Miami Dolphins fan and like watching the Vancouver Canucks as well. In my freetime I love reading, thrifting, lifting, and building things."
    },
    projects:[
      { title: 'Learn Chinese!', text: 'Flashcard App made using React, Django, PostgreSQL and TensorFlow', tech: ["React", "Django", "PostgreSQL"], link: "https://github.com/garrettwilloughby/Learn-Chinese.git"},
      { title: 'UCONN Course Registration Clone', text: 'Webapp made using Vue and AWS', tech: ["Vue", "AWS"], link: "https://github.com/garrettwilloughby/cse2102.git"},
      { title: 'This Website', text: 'Portfolio made using React', tech: ["React"], link: "https://github.com/garrettwilloughby/garrettwilloughby.github.io.git" },
      { title: 'Scheduler', text: 'C++ Scheduler', tech: ["C++"], link: "https://github.com/garrettwilloughby/Interval-Scheduler.git" },
    ],
    jobs: [
      {
        expData: {
          company: "UCONN",
          position: "Teaching Assistant",
          period: "August 2024 - Present",
          details: [
            "Currently a Teaching Assistant for CSE 2102 - Introduction to Software Engineering",
            "Lead labs where students are assisted in learning technologies such as Git, Docker and Figma",
            "Guiding the learning of software design, branching strategies, CI/CD, cloud computing, and AGILE methodologies for labs of 20+ students to reinforce good software engineering practices."
          ]
        }
      },
      {
        expData: {
          company: "Hubbell",
          position: "Software Engineer Intern",
          period: "May 2024 - August 2024",
          details: [
            "Enhanced .NET API endpoints to facilitate seamless data integration between the front-end, back-end as well as data provider.",
            "Developed a responsive and user-friendly front-end using Angular, optimizing user experience and highlighting crucial data points.",
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
            "Currently developing the P3-EX web application using Next.js and a Django back-end for prescribing exercises to cardiovascular patients.",
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
  