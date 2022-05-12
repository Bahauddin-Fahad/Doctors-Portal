import React from "react";

const UserMessage = () => {
  return (
    <div className="hero min-h-screen bg-[url('/public/images/appointment.png')]">
      <div className="card flex-shrink-0 w-full max-w-lg sm:pt-5 lg:pt-0">
        <div className="text-white text-center">
          <h4 className="text-secondary text-xl font-bold">Contact Us</h4>
          <h2 className="text-4xl">Stay Connected With Us</h2>
        </div>
        <div className="card-body">
          <div className="form-control">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              type="text"
              placeholder="Your Message"
              className="input input-bordered h-32"
            />
          </div>
          <div className="form-control mt-6 mx-auto">
            <button className="btn btn-primary w-48  text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
