import React from "react";
import { TCard } from "../../types/card";
import Image from "next/image";

const Card = (props: { cardData: TCard }) => {
  const { level, nutrition, rating, price, trainer, trainerPic, title, image } =
    props.cardData;
  return (
    <article className="card">
      <Image alt="" height={2000} width={2000} src={image} />
      <section className="card-details">
        <div className="course-status">
          <p className="beginner">{level}</p>
          <p className="nutrition">{nutrition}</p>
        </div>
        <h1>{title}</h1>
        <div className="review-status">
          <div className="stars">
            <Image
              alt=""
              height={50}
              width={50}
              src="/icons/star.png"
              className="star"
            />
            <Image
              alt=""
              height={50}
              width={50}
              src="/icons/star.png"
              className="star"
            />
            <Image
              alt=""
              height={50}
              width={50}
              src="/icons/star.png"
              className="star"
            />
            <Image
              alt=""
              height={50}
              width={50}
              src="/icons/star.png"
              className="star"
            />
            <Image
              alt=""
              height={500}
              width={500}
              src="/icons/half-star.png"
              className="star"
            />
          </div>
          <p>4.9 ({rating})</p>
        </div>
        <div className="deadline-lesson">
          <div className="deadline">
            <Image alt="" height={50} width={50} src="/icons/timer.png" />
            <p>6h 34m</p>
          </div>
          <div className="lessons">
            <Image alt="" height={50} width={50} src="/icons/book.png" />
            <p>3 Lessons</p>
          </div>
        </div>
        <div className="trainer-price">
          <div className="trainer">
            <Image alt="" height={500} width={500} src={trainerPic} />
            <h1>{trainer}</h1>
          </div>
          <h2>{price}</h2>
        </div>
      </section>
    </article>
  );
};

export default Card;
