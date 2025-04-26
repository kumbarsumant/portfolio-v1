import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="heading heading--primary mg--b--lg">
          <span className="hero__heading">Hi there,</span>
          <span className="hero__heading">I'm Sumant.</span>
        </h1>
        <div className="hero__text">
          Passionate developer and enthusiastic coder, dedicated to building
          efficient and innovative software solutions.
        </div>
      </div>
    </div>
  );
};

export default Hero;
