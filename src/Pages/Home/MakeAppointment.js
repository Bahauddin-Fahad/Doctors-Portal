import React from "react";
import doctor from "../../assets/images/doctor.png";
const MakeAppointment = () => {
  return (
    <section className="hero bg-[url('/public/images/appointment.png')] ">
      <div className="hero-content flex-col lg:flex-row sm:py-5 lg:py-0">
        <div className="max-w-lg rounded-lg mt-[-120px] hidden lg:block">
          <img alt="" src={doctor} />
        </div>
        <div className="text-white w-1/2">
          <h2 className="text-secondary text-xl font-bold mb-2">Appointment</h2>
          <h1 className="text-5xl font-semibold">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
