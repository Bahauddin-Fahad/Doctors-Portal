import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { toast } from "react-toastify";
const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const selectedDate = format(date, "PP");

  // Handling the booking
  const handleBooking = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.phone.value;
    const slot = e.target.slot.value;

    const bookingDetails = {
      treatmentId: _id,
      treatmentName: name,
      treatmentDate: selectedDate,
      treatmentSlot: slot,
      patientName: user.displayName,
      patientEmail: user.email,
      patientPhone: phoneNumber,
    };

    const bookingUrl = "http://localhost:5000/booking";
    axios.post(bookingUrl, bookingDetails).then((response) => {
      console.log(response.data.bookingDetails);
      if (response.data.success) {
        toast.success(
          `Your Appointment for ${name} is Confirmed at ${slot} in ${selectedDate}`,
          {
            theme: "colored",
          }
        );
      } else {
        toast.error(
          `You have already an appointment for ${name} at ${response.data.bookingDetails?.treatmentSlot} in ${response.data.bookingDetails?.treatmentDate}`,
          {
            theme: "colored",
          }
        );
      }
      refetch();
      setTreatment(null);
    });
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
                value={selectedDate}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <select name="slot" className="select select-bordered w-full">
                {slots.map((slot, index) => (
                  <option key={index}>{slot}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <input
                type="text"
                name="name"
                value={user?.displayName}
                className="input input-bordered"
                disabled
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
                className="input input-bordered"
                value={user?.email}
                disabled
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
