import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="about">
      <section className="about-left">
        <section className="about-details">
          <h1>We provide...</h1>
          <div className="unchecked-container">
            <div className="unchecked">
              <Image alt="" height={26} width={26} src="/icons/unchecked.png" />
              <h2>Personalized routine</h2>
            </div>
            <div className="unchecked">
              <Image alt="" height={26} width={26} src="/icons/unchecked.png" />
              <h2>Follow-up after completing courseszed routine</h2>
            </div>
          </div>
          <div className="checked">
            <Image alt="" height={26} width={26} src="/icons/checked.png" />
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
            <Image alt="" height={26} width={26} src="/icons/unchecked.png" />
            <h2>Free community support</h2>
          </div>
        </section>
        <button>Learn More About Our Services</button>
      </section>
      <section className="about-right">
        <Image
          alt=""
          height={1000}
          width={1000}
          src="/pictures/check.png"
          className="checked"
        />
        <Image
          alt=""
          height={2000}
          width={2000}
          src="/pictures/about.png"
          className="about-photo"
        />
      </section>
    </section>
  );
};

export default About;
