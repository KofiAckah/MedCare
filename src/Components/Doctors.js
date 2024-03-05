import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Doctors Pictures
import Doc1 from "../Images/Doc's Images/169671343ef815d20808e6c9e43c5c19.jpg";
import Doc2 from "../Images/Doc's Images/1b52fd81c2282b432b85dc6a8a01f13d.jpg";
import Doc3 from "../Images/Doc's Images/20322e78cd112ee1f6bcc9dbb75c41ff.jpg";
import Doc4 from "../Images/Doc's Images/969f93cde7a93cebc4f3a9c80abaab2c.jpg";
import Doc5 from "../Images/Doc's Images/9afc15945a094fed09106edef0e3f072.jpg";
import Doc6 from "../Images/Doc's Images/ce63475562f960ede351c2533415adc5.jpg";

export default function Doctors() {
  const data = [
    { image: Doc1, name: "John Deo" },
    { image: Doc2, name: "Mary Deo" },
    { image: Doc3, name: "Jerry Justice" },
    { image: Doc4, name: "Rosemary Jackson" },
    { image: Doc5, name: "Dorcas Mensah" },
    { image: Doc6, name: "Randy Asare" },
  ];
  return (
    <div className="md:h-screen bg-gray-100 max-md:pb-5" id="doctors">
      <h2 className="text-center text-6xl font-black text-shadow pt-7 mb-5">
        Our <span className="text-primary">Doctors</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-5 sm:px-10 lg:px-24 xl:px-32">
        {data.map((item) => (
          <div className="flex flex-col items-center border-2 border-primary rounded-md bgHover py-6 h-80 sm:h-72">
            <div className="w-32 sm:w-40 h-40 overflow-hidden border-2 border-primary rounded-md">
              <img src={item.image} alt="Doctor Pic" className="object-fill" />
            </div>
            <p className="text-xl text-center font-bold">{item.name}</p>
            <p className="text-primary">Expect Doctor</p>
            <div className="mt-2">
              <FontAwesomeIcon icon={faFacebookF} className="social-doc" />
              <FontAwesomeIcon icon={faXTwitter} className="social-doc" />
              <FontAwesomeIcon icon={faInstagram} className="social-doc" />
              <FontAwesomeIcon icon={faLinkedin} className="social-doc" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
