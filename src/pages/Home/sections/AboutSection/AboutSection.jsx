import "./AboutSection.scss";
import ProfileImage from "../../../../../public/images/profile_image.jpg";

const AboutSection = () => {
  return (
    <section className="section about">
      <h1 className="heading heading--primary mg--b--xlg">About</h1>
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
            I am a Software Engineer dedicated to designing scalable backend
            architectures and intelligent software systems. My core work centers
            on Python, high-throughput asynchronous microservices, and modern
            Agentic AI workflows. I love tackling deep technical bottlenecks
            from streamlining heavy data processing pipelines to exploring
            compiler internals building software that is fast, resilient, and
            built to scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
