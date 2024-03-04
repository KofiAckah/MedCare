import React from "react";
import HomeImage from "../Images/Contraception methods.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div id="home" className="h-screen grid grid-cols-2 bg-gray-100">
      <div className="flex justify-center items-center h-full">
        <img src={HomeImage} alt="Gif Image of A Doctor" className="bg-none" />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h2 className="text-5xl mb-4 font-black text-shadow">
          Stay Safe, Stay Healthy
        </h2>
        <p className="w-8/12 text-lg text-gray-600">
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Sed Autem
          Vero? Magnam, Est Laboriosam!
        </p>
        <button className="self-start border-2 border-primary text-primary p-2 rounded-md mt-4 flex hover:text-white hover:bg-primary ease-in-out transition-all duration-500 bgHover btn hover:translate-x-2 hover:translate-y-2">
          Contact Us
          <span className="bg-primary text-white ml-2 font-bold rounded-md px-2">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
