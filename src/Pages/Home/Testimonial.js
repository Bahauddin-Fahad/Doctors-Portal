import React from "react";

const Testimonial = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-20 mx-auto">
      <div className="card-body">
        <h6>{review.review}</h6>
        <div className="card-actions">
          <div className="flex items-center mt-9">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div className="ml-3">
              <h2 className="text-xl font-bold">{review.name}</h2>
              <h4 className="text-">{review.address}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //
    //   <div>
    //     <img src="" alt="" />
    //     <div>
    //       <h2>{review.name}</h2>
    //       <h4>{review.address}</h4>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Testimonial;
