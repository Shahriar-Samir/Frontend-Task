import React from "react";

const About = () => {
  return (
    <section className="about">
      <section className="about-left">
        <section className="about-details">
          <h1>We provide...</h1>
          <div className="unchecked-container">
            <div className="unchecked">
              <img src="/icons/unchecked.png" />
              <h2>Personalized routine</h2>
            </div>
            <div className="unchecked">
              <img src="/icons/unchecked.png" />
              <h2>Follow-up after completing courseszed routine</h2>
            </div>
          </div>
          <div className="checked">
            <img src="/icons/checked.png" />
            <div>
              <h2>Access to additional resources</h2>
              <p>
                We offer access to a variety of additional resources to enhance
                your experience, including exclusive tools, guides, and support
                materials designed to help you achieve your goals more
                effectively.
              </p>
            </div>
          </div>
          <div className="unchecked unchecked2">
            <img src="/icons/unchecked.png" />
            <h2>Free community support</h2>
          </div>
        </section>
        <button>Learn More About Our Services</button>
      </section>
      <section className="about-right">
        <img src="/pictures/check.png" className="checked" />
        <img src="/pictures/about.png" className="about-photo" />
      </section>
    </section>
  );
};

export default About;
