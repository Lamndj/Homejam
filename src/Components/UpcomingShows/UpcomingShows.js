import React from "react";
import Benny from "../../assets/benny.png";
import Vijay from "../../assets/Vijay.png";
import Andrea from "../../assets/Andrea.png";
import Shilpa from "../../assets/Shilpa.png";
import Arrow from "../../assets/Arrow.png";
import Divider from "../../assets/Divider.png";

import "./UpcomingShows.css";

export default function UpcomingShows() {
  const showData = [
    {
      img: Benny,
      tag: "Folk",
      name: "Benny Dayal",
    },
    {
      img: Vijay,
      tag: "Bollywood",
      name: "Vijay Yesudas",
    },
    {
      img: Andrea,
      tag: "Folk",
      name: "Andrea Jeremiah",
    },
    {
      img: Shilpa,
      tag: "Folk",
      name: "Shilpa Rao",
    },
  ];

  return (
    <div className="upcomingShows">
      <div className="upcomingShows__header">
        <div className="upcomingShows__Title">
          <h3 className>Upcoming Shows</h3>
          <hr />
        </div>
        <p>View All</p>
      </div>
      <div className="upcomingShows__cardContainer">
        {showData.map((show) => {
          return (
            <div className="upcomingShows__card">
              <div className="upcomingShows__card__gradientShadow"></div>
              <img
                className="upcomingShows__card__artistImg"
                src={show.img}
                alt="artist"
              />
              <div className="upcomingShows__card__body">
                <p className="upcomingShows__card__tag">{show.tag}</p>
                <h3 className="upcomingShows__card__name">{show.name}</h3>
                <div className="upcomingShows__card__footer">
                  <div>
                    <p>More Info</p>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <img
                      className="upcomingShows__card__footerDivider"
                      src={Divider}
                      alt="Divider"
                    />
                    <div className="upcomingShows__card__bookingImg"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
