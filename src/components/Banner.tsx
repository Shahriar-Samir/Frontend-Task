import React from "react";

const Banner = () => {
  return (
    <section className="banner-container">
      <section className="banner">
        <div className="banner-left">
          <div className="review-status">
            <div className="stars">
              <img src="/icons/star.png" className="star" />
              <img src="/icons/star.png" className="star" />
              <img src="/icons/star.png" className="star" />
              <img src="/icons/star.png" className="star" />
              <img src="/icons/half-star.png" className="star" />
            </div>
            <p>4.9 (566)</p>
          </div>
          <h1>#1 Platform Powering Health and Wellness</h1>
          <h2>
            We&apos;re restoring home as the primary place of personal
            well-being
          </h2>
          <p>
            Health is not just about what you&apos;re eating. It&apos;s also
            about what you&apos;re thinking and saying
          </p>
          <div className="btns">
            <button>Browse Courses</button>
            <button>Get Started</button>
          </div>
        </div>
        <div className="banner-right">
          <img src="/pictures/Leaf.png" className="leaf" />
          <img src="/pictures/banner.png" className="banner-photo" />
          <div className="banner-right-info">
            <div className="info1">
              <h1>12,000+</h1>
              <p>Happy learners rely on us regularly</p>
            </div>
            <div className="info2">
              <h1>Find your wellbeing</h1>
              <p>
                By prioritizing self-care and making informed choices, one can
                enhance their overall quality of life
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
