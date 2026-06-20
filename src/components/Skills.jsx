
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaAws
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiHibernate
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { MdSpeed } from "react-icons/md";

import "../Styles/Skills.css";

function Skills() {
  return (
    <section className="skills-section py-5" id="skills">

      <div className="container">

        <h2 className="text-center mb-2">
          Tech Stack
        </h2>

        <p className="text-center text-secondary mb-5">
          Technologies and tools I use to build full stack applications.
        </p>

        <div className="row g-4">

          {/* Java */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <FaJava size={40} />
              <h4>Java</h4>
            </div>
          </div>

          {/* Spring Boot */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <SiSpringboot size={40} />
              <h4>Spring Boot</h4>
            </div>
          </div>

          {/* Hibernate */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <SiHibernate size={40} />
              <h4>Hibernate / JPA</h4>
            </div>
          </div>

          {/* SQL */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <SiMysql size={40} />
              <h4>SQL</h4>
            </div>
          </div>

          {/* REST API */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <TbApi size={40} />
              <h4>REST APIs</h4>
            </div>
          </div>

          {/* React */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <FaReact size={40} />
              <h4>React</h4>
            </div>
          </div>

          {/* HTML */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <FaHtml5 size={40} />
              <h4>HTML</h4>
            </div>
          </div>

          {/* CSS */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <FaCss3Alt size={40} />
              <h4>CSS</h4>
            </div>
          </div>

          {/* Git */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <FaGitAlt size={40} />
              <h4>Git</h4>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <FaGithub size={40} />
              <h4>GitHub</h4>
            </div>
          </div>

          {/* Postman */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <SiPostman size={40} />
              <h4>Postman</h4>
            </div>
          </div>

          {/* JMeter */}
          <div className="col-lg-3 col-md-6">
            <div className="skill-card">
              <MdSpeed size={40} />
              <h4>JMeter</h4>
            </div>
          </div>

          {/* AWS */}
          <div className="col-lg-3 col-md-6 mx-auto">
            <div className="skill-card">
              <FaAws size={40} />
              <h4>AWS</h4>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;

