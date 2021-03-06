import React from "react";
import bannerImg from "../../assets/images/chair.png";
const HomeBanner = () => {
  return (
    <div className="px-12 hero min-h-screen bg-[url('/public/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 w-5/6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
