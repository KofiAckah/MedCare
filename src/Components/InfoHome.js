import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faUsers,
  faBedPulse,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

export default function InfoHome() {
  const data = [
    { icon: faUserDoctor, num: 140, text: "Doctors At Work" },
    { icon: faUsers, num: 1040, text: "Satisfied Patients" },
    { icon: faBedPulse, num: 500, text: "Bed Faclity" },
    { icon: faHospital, num: 80, text: "Available Hospitals" },
  ];

  return (
    <div className="xl:flex xl:gap-4  grid grid-cols-2 gap-7 sm:gap-10 my-5">
      {data.map((item) => (
        <div className="mx-auto">
          <div className="flex flex-col items-center justify-center border-2 border-primary w-36 h-36 sm:w-72 sm:h-64 bgHover rounded-md">
            <FontAwesomeIcon
              icon={item.icon}
              className="h-12 sm:h-16 text-primary"
            />
            <h2 className="text-3xl sm:text-6xl font-bold text-shadow my-2 sm:my-6">
              {item.num}+
            </h2>
            <p className="text-gray-600">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
