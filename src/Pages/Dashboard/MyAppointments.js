import axios from "axios";
import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/booking?patientEmail=${user.email}`;

      // fetch(url, {
      //   method: "GET",
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
      // })
      //   .then((res) => {
      //     if (res.status === 401 || res.status === 403) {
      //       signOut(auth);
      //       localStorage.removeItem("accessToken");
      //       navigate("/home");
      //     }
      //     return res.json();
      //   })
      //   .then((data) => setAppointments(data));

      axios
        .get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((data) => {
          console.log(data);
          setAppointments(data.data);
        })
        .catch((err) => {
          if (err.response.status === 401 || err.response.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
          }
        });
    }
  }, [user, navigate]);
  console.log(appointments);
  return (
    <div>
      <h2 className="text-lg text-primary font-bold">
        My Appointments : {appointments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatmentDate}</td>
                <td>{appointment.treatmentSlot}</td>
                <td>{appointment.treatmentName}</td>
                <td>
                  {appointment.treatmentPrice && !appointment.paid && (
                    <Link to={`/dashboard/payment/${appointment._id}`}>
                      <button className="btn btn-xs btn-success text-white ">
                        Pay Now
                      </button>
                    </Link>
                  )}
                  {appointment.treatmentPrice && appointment.paid && (
                    <div>
                      <div className="text-center text-white w-1/3 font-semibold bg-emerald-200 rounded-md mx-auto">
                        PAID
                      </div>
                      <p className="font-semibold">
                        Transaction Id:{" "}
                        <span className="text-success ">
                          {appointment.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
