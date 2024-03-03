import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-3 px-32 bg-white shadow-md top-0 sticky">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faHeartPulse} className="h-8 text-primary" />
        <h2 className="ml-2 text-2xl">Medcare.</h2>
      </div>
      <ul className="flex justify-evenly items-center">
        <Link
          smooth
          to="#home"
          className="mx-3 text-gray-600 hover:text-primary transition-all ease-in-out"
        >
          <li>Home</li>
        </Link>
        <Link
          smooth
          to="#services"
          className="mx-3 text-gray-600 hover:text-primary transition-all ease-in-out"
        >
          <li>Services</li>
        </Link>
        <Link
          smooth
          to="#about"
          className="mx-3 text-gray-600 hover:text-primary transition-all ease-in-out"
        >
          <li>About</li>
        </Link>
        <Link
          smooth
          to="#doctors"
          className="mx-3 text-gray-600 hover:text-primary transition-all ease-in-out"
        >
          <li>Doctors</li>
        </Link>
        <Link
          smooth
          to="#book"
          className="mx-3 text-gray-600 hover:text-primary transition-all ease-in-out"
        >
          <li>Book</li>
        </Link>
        <Link
          smooth
          to="#review"
          className="mx-3 text-gray-600 hover:text-primary transition-all ease-in-out"
        >
          <li>Review</li>
        </Link>
        <Link
          smooth
          to="#blogs"
          className="mx-3 text-gray-600 hover:text-primary transition-all ease-in-out"
        >
          <li>Blogs</li>
        </Link>
      </ul>
    </nav>
  );
}
