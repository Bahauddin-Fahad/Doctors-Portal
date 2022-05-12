import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[url('/public/images/footer.png')] bg-contain text-base-content h-96 flex flex-col justify-center">
      <div className="footer p-10 ">
        <div className="mx-auto">
          <span className="footer-title">Services</span>
          <Link to="" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Oral Healthy</span>
          <Link to="" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="" className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Our Address</span>
          <Link to="" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div className="text-center">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
