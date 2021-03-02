import React from "react";
import leftArrow_white from "../../assets/leftArrow_white.png";
import review1 from "../../assets/review1.png";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.png";
import USA_flag from "../../assets/USA_flag.png";
import IT_Flag from "../../assets/IT_Flag.png";

import "./Reviews.css";

export default function Reviews() {
  const reviewData = [
    {
      img: review1,
      name: "Hellen Jummy",
      place: "Palo Alto, CA",
      flag: USA_flag,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.",
    },
    {
      img: review2,
      name: "Isaac Oluwatemilorun",
      place: "Palo Alto, CA",
      flag: IT_Flag,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.",
    },
    {
      img: review3,
      name: "Hellen Jummy",
      place: "Palo Alto, CA",
      flag: USA_flag,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.",
    },
  ];

  return (
    <div className="reviews">
      <div className="reviews__header">
        <div className="reviews__Title">
          <h3 className>Reviews</h3>
          <hr />
        </div>
        <div className="reviews__pages">
          <p>
            1<strong>/12</strong>
          </p>
          <img
            className="reviews__leftArrow"
            src={leftArrow_white}
            alt="leftArrow_white"
          />
          <img
            className="reviews__rightArrow"
            src={leftArrow_white}
            alt="rightArrow_white"
          />
        </div>
      </div>

      <div className="reviews__cardContainer">
        {reviewData.map((elem) => {
          return (
            <div className="reviews__card">
              <div className="reviews__card__gradientShadow"></div>
              <div className="reviews__card__header">
                <img
                  className="reviews__card__artistImg"
                  src={elem.img}
                  alt="artist"
                />
                <div className="reviews__card__details">
                  <h3 className="reviews__card__name">{elem.name}</h3>
                  <div className="reviews__card__place">
                    <img src={elem.flag} alt="flag" />
                    <p>{elem.place}</p>
                  </div>
                </div>
              </div>
              <div className="reviews__card__body">
                <p>{elem.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
