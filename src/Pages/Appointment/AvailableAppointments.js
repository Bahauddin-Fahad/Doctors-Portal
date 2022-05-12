import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  console.log(treatment);
  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((data) => setServices(data.data));
  }, []);
  return (
    <div className="mt-10">
      <h2 className="text-secondary font-semibold text-center">
        Available Appointments On {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 mt-5">
        {services.map((service) => (
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
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
