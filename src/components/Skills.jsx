import {
 FaJava,
 FaReact,
 FaHtml5,
 FaCss3Alt,
 FaGithub,
 FaGitAlt
} from "react-icons/fa";

import {
 SiSpringboot,
 SiMysql,
 SiPostman
} from "react-icons/si";


import "../Styles/Skills.css";

function Skills() {
  return (
    <section className="skills-section py-5" id="Skills">

      <div className="container">

        <h2 className="text-center mb-5">
          Tech Stack
        </h2>

        <div className="row g-4">

          <div className="col-lg-3 col-md-6">

            <div className="skill-card">

              <FaJava size={40} />

              <h4>Java</h4>

            </div>

          </div>

          <div className="col-lg-3 col-md-6">

            <div className="skill-card">

              <SiSpringboot size={40} />

              <h4>Spring Boot</h4>

            </div>

          </div>

          <div className="col-lg-3 col-md-6">

            <div className="skill-card">

              <FaReact size={40} />

              <h4>React</h4>

            </div>

          </div>

          <div className="col-lg-3 col-md-6">

            <div className="skill-card">

              <SiMysql size={40} />

              <h4>SQL</h4>

            </div>

          </div>

          <div className="col-lg-3 col-md-6">

            <div className="skill-card">

              <FaHtml5 size={40} />

              <h4>HTML</h4>

            </div>

          </div>

          <div className="col-lg-3 col-md-6">

            <div className="skill-card">

              <FaCss3Alt size={40} />

              <h4>CSS</h4>

            </div>

          </div>

          <div className="col-lg-3 col-md-6">

            <div className="skill-card">

              <SiPostman size={40} />

              <h4>Postman</h4>

            </div>

          </div>

          <div className="col-lg-3 col-md-6">

            <div className="skill-card">

              <FaJava size={40} />

              <h4>JMeter</h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;