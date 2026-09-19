import "./AboutSection.scss";
import ProfileImage from "../../../../../public/images/profile_image.jpg";

const AboutSection = () => {
  return (
    <section className="section about">
      <h1 className="heading heading--primary mg--b--lg">About</h1>
      <div className="about__container">
        <div className="about__image-container">
          <img
            src={ProfileImage}
            alt="sumant-profile-image"
            className="about__image"
          />
        </div>
        <div className="about__text">
          <p className="paragraph">
            I am a Software Engineer dedicated to designing scalable backend
            architectures and intelligent software systems. My core work centers
            on Python, high-throughput asynchronous microservices, and modern
            Agentic AI workflows. I love tackling deep technical bottlenecks
            from streamlining heavy data processing pipelines to exploring
            compiler internals building software that is fast, resilient, and
            built to scale.
          </p>
          <p>
            Beyond backend systems, I have a keen eye for UI/UX design and
            frontend development. In my free time, I enjoy designing interfaces
            that are both intuitive and visually compelling, constantly
            experimenting with modern layouts, typography, and motion design.
            For me, great engineering is about bridging powerful backend logic
            with clean, elegant user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
