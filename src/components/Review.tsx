"use client";

import React, { useEffect, useState } from "react";

const Review = () => {
  const [rounds, setRounds] = useState([1, 0, 0, 0]);
  const [slide, setSlide] = useState(0);
  const [cardSize, setCardSize] = useState<number>(0);
  const [cardQuantity, setCardQuantity] = useState<number>(0);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setCardQuantity(1);
      setCardSize(344);
    } else {
      setCardQuantity(2);
      setCardSize(254);
    }
  }, []);

  const changeSlide = (round) => {
    setRounds((preRounds: numbers[]) => {
      return preRounds.map((item, index) => {
        if (index === round) {
          return 1;
        } else {
          return 0;
        }
      });
    });
    setSlide(-cardSize * (round + cardQuantity));
  };
  console.log(slide);

  return (
    <section className="review-section">
      <h1>Learners love EduPath. See why they rate us 4.9 out of 5</h1>
      <section className="reviews-container">
        <section className="reviews" style={{ left: `${slide}px` }}>
          <article className="review">
            <div className="review-photos">
              <img src="/pictures/profile1.png" />
              <img src="/pictures/quote.png" />
            </div>
            <h2>Kilian Murphe</h2>
            <p>
              I love the interactive elements and the community forums where I
              can connect with other learners.
            </p>
          </article>
          <article className="review">
            <div className="review-photos">
              <img src="/pictures/profile1.png" />
              <img src="/pictures/quote.png" />
            </div>
            <h2>Kilian Murphe</h2>
            <p>
              &quot;The mindfulness courses have helped me manage stress better
              and find balance in my daily life. The guided meditations are a
              highlight! The courses are well worth the investment and have made
              a positive impact on my life.&quot;
            </p>
          </article>
          <article className="review">
            <div className="review-photos">
              <img src="/pictures/profile1.png" />
              <img src="/pictures/quote.png" />
            </div>
            <h2>Kilian Murphe</h2>
            <p>
              A fantastic platform with a wide variety of health and wellness
              courses. The instructors are top-notch, and the content is very
              engaging.
            </p>
          </article>
          <article className="review">
            <div className="review-photos">
              <img src="/pictures/profile1.png" />
              <img src="/pictures/quote.png" />
            </div>
            <h2>Kilian Murphe</h2>
            <p>
              It&apos;s not just about physical health but mental and emotional
              well-being too.
            </p>
          </article>
          <article className="review">
            <div className="review-photos">
              <img src="/pictures/profile1.png" />
              <img src="/pictures/quote.png" />
            </div>
            <h2>Kilian Murphe</h2>
            <p>
              &quot;I love the flexibility of the courses. I can learn at my own
              pace and revisit the material whenever I need to.&quot;
            </p>
          </article>
          <article className="review">
            <div className="review-photos">
              <img src="/pictures/profile1.png" />
              <img src="/pictures/quote.png" />
            </div>
            <h2>Kilian Murphe</h2>
            <p>
              &quot;A fantastic platform with a wide variety of health and
              wellness courses. The instructors are top-notch, and the content
              is very engaging.&quot;
            </p>
          </article>
          <article className="review">
            <div className="review-photos">
              <img src="/pictures/profile1.png" />
              <img src="/pictures/quote.png" />
            </div>
            <h2>Kilian Murphe</h2>
            <p>
              &quot;A fantastic platform with a wide variety of health and
              wellness courses. The instructors are top-notch, and the content
              is very engaging.&quot;
            </p>
          </article>
        </section>
      </section>
      <section className="rounds">
        {rounds.map((item, index) => {
          if (item === 1) {
            return <div key={index} className="round-select"></div>;
          }
          return (
            <div
              key={index}
              onClick={() => changeSlide(index)}
              className="round"
            ></div>
          );
        })}
      </section>
    </section>
  );
};

export default Review;
