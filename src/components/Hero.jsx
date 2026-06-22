import profile from "../assets/images/ankita-main.png";
import Galaxy from "./Galaxy";

function Hero() {
  return (
    <section className="hero-section" id="home">

      <Galaxy />

      <div className="container hero-content">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-6">
            <p className="accent">HELLO, I'M</p>

            <h1 className="display-2 fw-bold">
              Ankita Gore
            </h1>

            <h3 className="text-warning mb-4">
              Frontend Developer | Full Stack Java Developer
            </h3>

            <p className="lead">
              Building scalable web applications using
              Java, Spring Boot, SQL and React.
            </p>

            <div className="mt-4">
              <a href="#projects" className="btn btn-warning me-3">
                View Projects
              </a>

              <a
                href="/resume.docx"
                className="btn btn-outline-light"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src={profile}
              className="hero-image"
              alt="Ankita"
            />
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;