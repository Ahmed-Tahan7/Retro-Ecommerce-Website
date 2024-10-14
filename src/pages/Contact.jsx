import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "630px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        {/* ---------------------------- Google Maps API integration -------------------------- */}
        <div className="border w-1/2">
          <LoadScript googleMapsApiKey="API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            />
          </LoadScript>
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          {/* -------------------------- Contact Info ---------------------------- */}
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            532 Abou Quer, Fleming, El Raml 2 <br /> Alexandria, EGY
          </p>
          <p className="text-gray-500">
            Tel: +20 1245216245 <br /> Email: contact@retro.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at{" "}
            <span className="text-dark-goldenrod font-extrabold">Retro</span>
          </p>
          <p className="text-gray-500">Learn more about our teams</p>
          <button className="border border-black px-8 py-4 rounded-lg text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;