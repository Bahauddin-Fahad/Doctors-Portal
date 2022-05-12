import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatment, setTreatment, date }) => {
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const phoneNumber = e.target.phone.value;
    const email = e.target.email.value;
    const slot = e.target.slot.value;
    console.log(slot, email);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="card-body">
            <div className="form-control">
              <input
                type="text"
                value={format(date, "PP")}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <select name="slot" className="select select-bordered w-full">
                {slots.map((slot) => (
                  <option>{slot}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Submit"
                className="btn btn-dark text-white booking-modal"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
