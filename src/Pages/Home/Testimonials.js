import React from "react";
import quote from "../../assets/icons/quote.svg";
import Testimonial from "./Testimonial";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      address: "California",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Winson Herry",
      address: "California",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Winson Herry",
      address: "California",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="my-24 px-12">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-secondary text-xl font-bold mb-2">Testimonial</h4>
          <h2 className="text-4xl">What Our Parents Says</h2>
        </div>
        <div className="w-24 lg:w-48">
          <img src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {reviews.map((review) => (
          <Testimonial key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
