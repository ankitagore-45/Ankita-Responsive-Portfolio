import profile from "../assets/images/ankita-main.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Galaxy from "./Galaxy";

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* <Galaxy /> */}

      <div className="container hero-content">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-6 mt-3">
           <span className="availability">
              🟠 Available for Opportunities
            </span>
            <p className="accent">HELLO, I'M</p>

            <h1 className="display-2 fw-bold">
              Ankita Gore
            </h1>

            <h3 className="text-warning mb-4">
              Full Stack Java Developer
            </h3>

            <p className="lead">
             Building scalable and user-friendly web applications using
            Java, Spring Boot, SQL, REST APIs, and React.
            </p>

            <div className="mt-4 ">
              <a href="#projects" className="btn btn-warning me-3">
                View Projects
              </a>

              <a
                href="/Ankita Gore - Resume (1).pdf"
                className="btn btn-outline-light "
              >
                Resume
              </a>
           

              <a href="https://github.com/ankitagore-45" className="btn btn-dark ms-2 linkSection">
                <FaGithub /> GitHub
              </a>

              <a href="https://www.linkedin.com/in/ankita-gore-4587ag/" className="btn btn-primary ms-2 linkSection">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
              <div className="col-lg-6 text-center">
                <div className="profile-card">
                  <img
                    src={profile}
                    className="hero-image"
                    alt="Ankita Gore"
                  />
                </div>
              </div>

              <div className="hero-stats  ">
                <div className="stat">
                  <h3>8.95</h3>
                  <p>CGPA</p>
                </div>

                <div className="stat">
                  <h3>1</h3>
                  <p>Internship</p>
                </div>

                <div className="stat">
                  <h3>4+</h3>
                  <p>Projects</p>
                </div>

                <div className="stat">
                  <h3>1</h3>
                  <p>Publication</p>
                </div>
              </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;