import React from "react";
import { TCard } from "../../types/card";

const Card = (props: { cardData: TCard }) => {
  const { level, nutrition, rating, price, trainer, trainerPic, title, image } =
    props.cardData;
  return (
    <article className="card">
      <img src={image} />
      <section className="card-details">
        <div className="course-status">
          <p className="beginner">{level}</p>
          <p className="nutrition">{nutrition}</p>
        </div>
        <h1>{title}</h1>
        <div className="review-status">
          <div className="stars">
            <img src="/icons/star.png" className="star" />
            <img src="/icons/star.png" className="star" />
            <img src="/icons/star.png" className="star" />
            <img src="/icons/star.png" className="star" />
            <img src="/icons/half-star.png" className="star" />
          </div>
          <p>4.9 ({rating})</p>
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
            <img src={trainerPic} />
            <h1>{trainer}</h1>
          </div>
          <h2>{price}</h2>
        </div>
      </section>
    </article>
  );
};

export default Card;
