import "./../Styles/About.css";


function About() {
  return (
   <section id="about" className="section">
  <div className="container">

    <div className="row mb-5">

      <div className="col-lg-7">
        <p className="section-tag">ABOUT ME</p>

        <h2 className="mb-4">
          Full Stack Java Developer
        </h2>

        <p>
          I am Ankita Gore, a Full Stack Java Developer
          passionate about building scalable and user-friendly
          web applications.
        </p>

        <p>
          My expertise includes Java, Spring Boot,
          SQL, React, REST APIs and modern web technologies.
          I enjoy transforming ideas into real-world solutions.
        </p>

        <p>
          Along with my academic background, I have internship experience and hands-on 
          experience developing full-stack web applications and responsive user interfaces.
        </p>
      </div>

      <div className="col-lg-5">
        <div className="stat-card">
          <h2>5+</h2>
          <p>Projects Built</p>
        </div>

        <div className="stat-card mt-3">
          <h2>1</h2>
          <p>Research Paper</p>
        </div>

        <div className="stat-card mt-3">
          <h2>Internship Experience</h2>
          <p>Years Experience</p>
        </div>
      </div>

    </div>

    <h3 className="mb-5 text-center">
      My Journey
    </h3>

    <div className="">

           <div className="timeline">
      <div className="timeline-item">
    <span>2026</span>
    <h4>Full Stack Development Project</h4>
    <h6>Smart Hospital Management System</h6>
    <p>
     Developed a full-stack hospital management platform with Admin, Doctor, and
      Patient modules using Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and REST APIs.
    </p>
  </div>

  <div className="timeline-item">
    <span>2025</span>
    <h4>Full Stack Java Development</h4>
    <h6>Advanced Training</h6>
    <p>
      Learning Spring Boot, React, SQL, REST APIs,
      JWT Authentication and deployment.
    </p>
  </div>
  <div className="timeline-item">
    <span>Dec 2023 – Apr 2024</span>
    <h4>Frontend Developer Intern</h4>
    <h6>Kanak Digifex Pvt. Ltd.</h6>
    <p>
      Developed responsive web pages using HTML, CSS and JavaScript.
      Collaborated with team members to implement UI requirements,
      improve performance and ensure cross-browser compatibility.
    </p>
  </div>

  <div className="timeline-item">
    <div className="timeline-item">
    <span>2021 – 2025</span>
    <h4>B.E. Information Technology</h4>
    <h6>Savitribai Phule Pune University</h6>
    <p>
      Specialized in Information Technology, Database Management Systems, Distributed Systems, 
      Machine Learning, and Web Technologies.
    </p>
  </div>

</div>

  </div> 

    </div>

  </div>
</section>
  );
}

export default About;