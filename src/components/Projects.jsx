// import hospital from "../assets/images/hospital.png";
// import weather from "../assets/images/weather.png";
// import magical from "../assets/images/magical.png";

function Projects() {
  const projects = [
    {
      title: "Smart Hospital Management System",
     // image: hospital,
      desc: "Full-stack web application  Developed modules for Admin, Doctor, and Patient with appointment scheduling, patient management, REST APIs, and MySQL integration.",
      tech: "Java, Spring Boot, MySQL,JavaScript",
      live: "https://spring-smarthospitalmanagementsystem-6.onrender.com/",
      github: "https://github.com/ankitagore-45"
    },
    {
      title: "Weather Application",
     // image: weather,
      desc: "Developed a responsive React application that fetches and displays real-time weather information using REST APIs.",
      tech: "React, API, Bootstrap",
      live: "https://weather-react-ashy-tau.vercel.app/",
      github: "https://github.com/ankitagore-45"
    },
    {
      title: "A Piece Of Me",
     // image: magical,
      desc: "Responsive personal website demonstrating advanced HTML, CSS, JavaScript animations, responsive layouts, and interactive UI components.",
      tech: "HTML, CSS, JavaScript",
      live: "https://ankitagore-45.github.io/a-piece-of-me/",
      github: "https://github.com/ankitagore-45"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <p className="section-tag">
          FEATURED WORK
        </p>

        <h2 className="section-title">
          Projects That Define My Journey
        </h2>

        <div className="row g-4 mt-4">

          {projects.map((project,index)=>(
            <div className="col-lg-4" key={index}>

              <div className="project-card">

                {/* <img
                  src={project.image}
                  className="project-image"
                /> */}

                <div className="p-4">

                  <h4>{project.title}</h4>

                  <p>{project.desc}</p>

                  <span className="tech-badge">
                    {project.tech}
                  </span>

                  <div className="mt-4">

                    <a
                      href={project.live}
                      target="_blank"
                      className="btn btn-warning me-2"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="btn btn-outline-light"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;