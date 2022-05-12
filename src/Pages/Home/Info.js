import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  const infoDetails = {
    info1: "Lorem Ipsum is simply dummy text of the pri",
    info2: "Brooklyn, NY 10036, United States",
    info3: "+000 123 456789",
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        cardDetail={infoDetails.info1}
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      />
      <InfoCard
        cardTitle="Visit Our Location"
        cardDetail={infoDetails.info2}
        bgClass="bg-accent"
        img={marker}
      />
      <InfoCard
        cardTitle="Contact Us Now"
        cardDetail={infoDetails.info3}
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      />
    </div>
  );
};

export default Info;
