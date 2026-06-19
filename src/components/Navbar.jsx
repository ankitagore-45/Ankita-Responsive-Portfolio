function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-nav fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Ankita
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>

            <li className="nav-item">
              <a href="#Skills" className="nav-link">Skills</a>
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;