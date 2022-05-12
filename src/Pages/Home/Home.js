import React from "react";
import MakeAppointment from "./MakeAppointment";
import HomeBanner from "./HomeBanner";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";
import UserMessage from "./UserMessage";

const Home = () => {
  return (
    <div className="">
      <HomeBanner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <UserMessage />
    </div>
  );
};

export default Home;
