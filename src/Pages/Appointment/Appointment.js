import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
    </div>
  );
};

export default Appointment;
