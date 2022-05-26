import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-center">
        <h2 className="text-xl text-secondary font-semibold">{name}</h2>
        <p className="font-semibold">Price : ${price}</p>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-[red] font-semibold">No Slot Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions mx-auto">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn border-0 bg-gradient-to-r from-secondary to-primary text-white shadow-md"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
