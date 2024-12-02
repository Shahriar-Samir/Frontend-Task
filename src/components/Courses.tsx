import React from "react";

const Courses = () => {
  return (
    <section className="courses-section">
      <section className="courses-heading">
        <div className="courses-titles">
          <h1>Our popular courses</h1>
          <p>
            By taking proactive steps to nurture mental health, we can enhance
            our quality of life, build resilience, and foster a sense of inner
            peace and balance
          </p>
        </div>
        <section className="courses-btns">
          <div className="courses-btn1">
            <img src="/icons/left-button.png" />
          </div>
          <div className="courses-btn2">
            <img src="/icons/right-button.png" />
          </div>
        </section>
      </section>

      <section className="cards">
        <article className="card">
          <img src="/pictures/card1.png" />
          <section className="card-details">
            <div className="course-status">
              <p className="beginner">Beginner</p>
              <p className="nutrition">Nutrition and Diet</p>
            </div>
            <h1>Foundation of Sleep: Sleep Science and Sleep Disorders</h1>
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
            <div className="deadline-lesson">
              <div className="deadline">
                <img src="/icons/timer.png" />
                <p>6h 34m</p>
              </div>
              <div className="lessons">
                <img src="/icons/book.png" />
                <p>3 Lessons</p>
              </div>
            </div>
            <div className="trainer-price">
              <div className="trainer">
                <img src="/pictures/profile1.png" />
                <h1>Kilian Murphe</h1>
              </div>
              <h2>$40</h2>
            </div>
          </section>
        </article>
      </section>
    </section>
  );
};

export default Courses;
