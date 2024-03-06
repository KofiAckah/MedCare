import React from "react";
import DoctorImage from "../Images/Online Doctor.gif";

export default function Book() {
  return (
    <div
      className="md:h-screen md:grid grid-cols-2 items-center justify-center"
      id="book"
    >
      <div className="flex justify-center items-center h-full">
        <img
          src={DoctorImage}
          alt="Gif Image of A Doctor"
          className="bg-none"
        />
      </div>
      <form className="flex flex-col m-5 mx-10 justify-center border-2 border-primary rounded-md md:w-4/5 bgHover md:mx-auto">
        <caption className="text-2xl md:text-4xl font-bold my-5 sm:my-10">
          Book Appointment
        </caption>
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded-md mb-4 border-2 border-primary mx-4"
        />
        <input
          type="tel"
          placeholder="Your Number"
          className="p-2 rounded-md mb-4 border-2 border-primary mx-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded-md mb-4 border-2 border-primary mx-4"
        />
        <input
          type="date"
          className="p-2 rounded-md mb-4 border-2 border-primary mx-4"
        />
        <button className="border-2 border-primary text-primary p-2 rounded-md hover:text-white hover:bg-primary ease-in-out transition-all duration-500 max-md:mb-7 bgHover btn hover:translate-x-2 hover:translate-y-2 mx-auto px-8 mb-6">
          Book Now
        </button>
      </form>
    </div>
  );
}
