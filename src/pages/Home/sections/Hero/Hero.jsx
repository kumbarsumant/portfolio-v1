import "./Hero.scss";

const Hero = () => {
  return (
    <>
      {/* Global Header & Navigation */}
      <header className="header navbar">
        <nav className="navbar__nav">
          <ul className="navbar__container">
            <li className="navbar__list">
              <a href="#about" className="navbar__list__item">
                About
              </a>
            </li>
            <li className="navbar__list">
              <a href="#about" className="navbar__list__item">
                Work
              </a>
            </li>
            <li lassName="navbar__list">
              <a href="#projects" className="navbar__list__item">
                Projects
              </a>
            </li>
            <li lassName="navbar__list">
              <a href="#contact" className="navbar__list__item">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="section hero">
        <div className="hero__container">
          <h1 className="heading heading--primary mg--b--lg">
            <span className="hero__heading">Hi There,</span>
            <span className="hero__heading">I'm Sumant.</span>
          </h1>
          <div className="hero__text">
            Software Engineer building scalable backend architectures and AI
            solutions. Focused on high-performance software that solves real
            problems.
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
