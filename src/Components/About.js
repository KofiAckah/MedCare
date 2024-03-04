import React from "react";
import DocImage from "../Images/Doctors.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div id="about" className="h-screen grid grid-cols-2">
      <h2 className="col-span-2 text-center text-6xl font-black text-shadow mt-16">
        <span className="text-primary">About</span> Us
      </h2>
      <div className="flex justify-center items-center h-full">
        <img src={DocImage} alt="Gif Image of A Doctor" className="bg-none" />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h2 className="text-5xl font-black text-shadow">
          We Take Care Of Your <span className="block my-5">Healthy Life</span>
        </h2>
        <p className="w-8/12 text-lg text-gray-600">
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Sed Autem
          Vero? Magnam, Est Laboriosam! Lorem Ipsum Dolor Sit Amet Consectetur
          <br />
          <br />
          Adipisicing Elit. Rem Sed Autem Vero? Magnam, Est Laboriosam! Lorem
          Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Sed Autem Vero?
          Magnam, Est Laboriosam!
          <br />
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Sed Autem
          Vero? Magnam, Est Laboriosam!
        </p>
        <button className="self-start border-2 border-primary text-primary p-2 rounded-md mt-4 flex hover:text-white hover:bg-primary ease-in-out transition-all duration-500 bgHover btn hover:translate-x-2 hover:translate-y-2">
          Learn More
          <span className="bg-primary text-white ml-2 font-bold rounded-md px-2">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
