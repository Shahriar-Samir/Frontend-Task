import React from "react";

const Review = () => {
  return (
    <section className="review-section">
      <h1>Learners love EduPath. See why they rate us 4.9 out of 5</h1>
      <section className="reviews">
        <article className="review">
          <div className="review-photos">
            <img src="/pictures/profile1.png" />
            <img src="/pictures/quote.png" />
          </div>
          <h2>Kilian Murphe</h2>
          <p>
            &quot;The mindfulness courses have helped me manage stress better
            and find balance in my daily life. The guided meditations are a
            highlight! The courses are well worth the investment and have made a
            positive impact on my life.&quot;
          </p>
        </article>
      </section>
    </section>
  );
};

export default Review;
