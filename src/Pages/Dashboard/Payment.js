import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0ozSFQMC6ZB6bzt0dxa1LaoMEuD6gRJRf610DtiJ5HQ8OUPWSK5UBcaF13eDEGuncz7XIkz8ggSzRwL42z1HxR00AQ59TUxV"
);
const Payment = () => {
  const { appointmentId } = useParams();
  const url = `http://localhost:5000/booking/${appointmentId}`;
  const { data: appointment, isLoading } = useQuery(
    ["booking", appointmentId],
    () =>
      axios
        .get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((data) => {
          return data.data;
        })
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="flex-col ">
          <div className="card w-50 max-w-md bg-base-100 shadow-xl mb-4">
            <div className="card-body">
              <h2 className="card-title text-primary text-xl font-bold">
                Hello<span className="">{appointment?.patientName}</span>
              </h2>
              <p>
                Your Appointment : at{" "}
                <span className="text-[red] font-semibold">
                  {appointment?.treatmentSlot}
                </span>{" "}
                on{" "}
                <span className="text-[red] font-semibold">
                  {appointment?.treatmentDate}
                </span>{" "}
                for{" "}
                <span className="text-primary font-semibold">
                  {appointment?.treatmentName}
                </span>
              </p>
              <p className="text-lg font-bold">
                Like to Pay{" "}
                <span className="text-primary">
                  ${appointment?.treatmentPrice}
                </span>{" "}
                Now?
              </p>
            </div>
          </div>
          <div className="card w-50 max-w-md bg-base-100 shadow-xl mb-4">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
