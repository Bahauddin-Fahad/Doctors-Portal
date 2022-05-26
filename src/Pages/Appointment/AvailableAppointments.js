import axios from "axios";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formettedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formettedDate], () =>
    axios
      .get(`http://localhost:5000/available?treatmentDate=${formettedDate}`)
      .then((data) => {
        return data.data;
      })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-10">
      <h2 className="text-secondary font-semibold text-center">
        Available Appointments On {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 mt-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          key={treatment._id}
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
