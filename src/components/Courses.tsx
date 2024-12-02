"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import { TCard } from "../../types/card";

const Courses = () => {
  const [cardState, setCardState] = useState<number>(0);
  const [cardSize, setCardSize] = useState<number>(0);
  const [cardQuantity, setCardQuantity] = useState<number>(0);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setCardQuantity(2);
      setCardSize(420);
    } else {
      setCardQuantity(3);
      setCardSize(320);
    }
  }, []);

  const leftClick = () => {
    if (cardState === 0) {
      return;
    }
    return setCardState((oldState: number) => oldState + cardSize);
  };
  const rightClick = () => {
    if (cardState <= -cardSize * cardQuantity) {
      return;
    }
    return setCardState((oldState: number) => oldState - cardSize);
  };

  const cards: TCard[] = [
    {
      level: "Beginner",
      nutrition: "Nutrition and Diet",
      title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
      rating: 566,
      price: "$40",
      trainer: "Kilian Murphe",
      trainerPic: "/pictures/profile1.png",
      image: "/pictures/card1.png",
    },
    {
      level: "Intermediate",
      nutrition: "Health and Wellness",
      title: "Parenting in the Digital Age: Navigating Screen Time",
      rating: 456,
      price: "$50",
      trainer: "Sarah Hopkins",
      trainerPic: "/pictures/profile2.png",
      image: "/pictures/card2.png",
    },
    {
      level: "Beginner",
      nutrition: "Nutrition and Diet",
      title: "Holistic Health: Integrating Mind, Body, and Spirit",
      rating: 389,
      price: "Enrolled",
      trainer: "Luna Karim",
      trainerPic: "/pictures/profile3.png",
      image: "/pictures/card3.png",
    },
    {
      level: "Beginner",
      nutrition: "Nutrition and Diet",
      title: "Introduction to healthy Diet and Nutrition",
      rating: 566,
      price: "$40",
      trainer: "Kilian Murphe",
      trainerPic: "/pictures/profile4.png",
      image: "/pictures/card4.png",
    },
  ];

  return (
    <section className="courses-container">
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
            <div className="courses-btn1" onClick={leftClick}>
              <img src="/icons/left-button.png" />
            </div>
            <div className="courses-btn2" onClick={rightClick}>
              <img src="/icons/right-button.png" />
            </div>
          </section>
        </section>

        <section className="cards-container">
          <section className="cards" style={{ left: `${cardState}px` }}>
            {cards.map((item) => {
              return <Card key={item.trainerPic} cardData={item} />;
            })}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Courses;
