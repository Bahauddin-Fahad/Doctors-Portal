import React from "react";

const InfoCard = ({ img, cardTitle, cardDetail, bgClass }) => {
  return (
    <div className={`card sm:py-5 lg:card-side shadow-xl ${bgClass}`}>
      <figure className="pl-6">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title ">{cardTitle}</h2>
        <p>{cardDetail}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
