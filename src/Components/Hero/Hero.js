import React from "react";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import Calendar from "../../assets/Calendar.png";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">Cari Cari</h1>
      <p className="hero__description">
        Live from their sofa to yours. Get closer to your favorite <br />{" "}
        artists, and never miss out.
      </p>
      <div className="hero__analytics">
        <div className="hero__single__analytic">
          <svg
            class="hero__analytics__path"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={window.innerWidth < 480 ? "71" : "103"}
              cy={window.innerWidth < 480 ? "71" : "103"}
              r={window.innerWidth < 480 ? "70" : "102"}
              stroke="#DD4CAC"
              stroke-width="1"
            />
          </svg>
          <img src={Heart} alt="heart" />
          <p>456</p>
          <label>Likes everyday</label>
        </div>
        <div className="hero__single__analytic">
          <img src={Calendar} alt="Calendar" />
          <p>745</p>
          <label>Online Events</label>
        </div>
        <div className="hero__single__analytic">
          <img src={Calendar} alt="Calendar" />
          <p>0</p>
          <label>Label</label>
        </div>
        <div className="hero__single__analytic">
          <img src={Calendar} alt="Calendar" />
          <p>0</p>
          <label>Label</label>
        </div>
      </div>
    </div>
  );
}
