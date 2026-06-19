import "./../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container mt-5">

        <div className="text-center mb-5">
          <p className="section-tag">GET IN TOUCH</p>

          <h2 className="section-title">
            Let's Build Something Amazing Together
          </h2>

          <p className="contact-subtitle">
            Looking for Full Stack Java Developer opportunities,
            freelance work, internships and collaborations.
          </p>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-8">

            <div className="contact-card">

              <form
                action="https://formspree.io/f/xdabzpgr"
                method="POST"
              >

                <div className="row">

                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control custom-input"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control custom-input"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    className="form-control custom-input"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    rows="6"
                    name="message"
                    className="form-control custom-input"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-warning px-5 py-3"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;