import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bannerImg from "../../assets/images/chair.png";
const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen bg-[url('/public/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={bannerImg}
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div className="lg:mr-28">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
