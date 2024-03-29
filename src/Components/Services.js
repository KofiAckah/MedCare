import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faTruckMedical,
  faUserDoctor,
  faPills,
  faBedPulse,
  faHeartPulse,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const data = [
    { icon: faClipboardList, name: "Free Checkups" },
    { icon: faTruckMedical, name: "24/7 Ambulance" },
    { icon: faUserDoctor, name: "Expert Doctors" },
    { icon: faPills, name: "Medicines" },
    { icon: faBedPulse, name: "Bed Facility" },
    { icon: faHeartPulse, name: "Total Care" },
  ];

  return (
    <div className="lg:h-screen  bg-gray-100" id="services">
      <h2 className="text-center text-6xl font-black text-shadow my-5">
        Our <span className="text-primary">Services</span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 sm:gap-10 lg:px-16 xl:px-40">
        {data.map((item) => (
          <div className="flex items-start flex-col border-2 border-primary bgHover py-5 px-2 rounded-md w-40 sm:w-72 h-full mx-auto">
            <FontAwesomeIcon icon={item.icon} className="h-16 text-primary" />
            <p className="text-2xl font-bold my-4">{item.name}</p>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur, Adipiscing Elit, Ad, Omnis
            </p>
            <button className="self-start border-2 border-primary text-primary p-2 rounded-md mt-4 flex hover:text-white hover:bg-primary ease-in-out transition-all duration-500 bgHover btn hover:translate-x-2 hover:translate-y-2">
              Learn More
              <span className="bg-primary text-white ml-2 font-bold rounded-md px-2">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
