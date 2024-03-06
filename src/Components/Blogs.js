import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Doc1 from "../Images/Doc's Images/169671343ef815d20808e6c9e43c5c19.jpg";
import Doc2 from "../Images/Doc's Images/1b52fd81c2282b432b85dc6a8a01f13d.jpg";
import Doc3 from "../Images/Doc's Images/20322e78cd112ee1f6bcc9dbb75c41ff.jpg";

export default function Blogs() {
  const data = [
    {
      image: Doc1,
      date: "5th March 2024",
      who: "By Admin",
      blogTitle: "The Importance of Regular Health Checkups",
    },
    {
      image: Doc2,
      date: "29th February 2024",
      who: "By Admin",
      blogTitle: "The Importance of Doctor's Advice",
    },
    {
      image: Doc3,
      date: "20th February 2024",
      who: "By Livingstone",
      blogTitle: "What to do when you have a fever",
    },
  ];
  return (
    <div className="md:h-screen" id="blogs">
      <h2 className="text-center text-6xl font-black text-shadow pt-7 mb-5">
        OUR <span className="text-primary">BLOGS</span>
      </h2>
      <div className="md:grid grid-cols-3 lg:px-16 xl:px-32">
        {data.map((item) => (
          <div className="border-2 border-primary rounded-md bgHover p-6 m-5">
            <div className="w-11/12 h-40 overflow-hidden border-2 border-primary rounded-md mx-auto">
              <img src={item.image} alt="Doctor Pic" className="object-fill" />
            </div>
            <div className="">
              <div className="flex items-center justify-between my-2">
                <div>
                  <p className="text-primary">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                    {item.date}
                  </p>
                </div>
                <div>
                  <p className="text-primary">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    {item.who}
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold">{item.blogTitle}</p>
              <p>
                Lorem Ipsum, dolor Sit Amet Consectetur Adipiscing Elit.
                Provident, Eius
              </p>
              <button className="self-start border-2 border-primary text-primary p-2 rounded-md mt-4 flex hover:text-white hover:bg-primary ease-in-out transition-all duration-500 bgHover btn hover:translate-x-2 hover:translate-y-2 max-md:mb-5">
                Learn More
                <span className="bg-primary text-white ml-2 font-bold rounded-md px-2">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
