import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          {/* ------------------ Footer Caption ----------------- */}
          <p className="w-full md:w-2/3 text-gray-600">
            At Retro, we are committed to providing our customers with
            high-quality products that enhance their lifestyle. Our passion for
            excellence drives us to innovate and deliver exceptional value in
            every item we offer. Join us in our journey to redefine your
            shopping experience.
          </p>
        </div>
        <div>
          {/* ------------------- Footer Nav ------------------ */}
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          {/* ------------------- Footer Contact ------------------ */}
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+20123456789</li>
            <li>Contact@Retro.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        {/* ------------------- Footer Rights ------------------ */}
        <p className="py-5 text-sm text-center">
          Copyright 2024@Retro.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
