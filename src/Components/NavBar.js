import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

export default function NavBar() {
  const [open, setOpen] = useState(true);

  function handleMenuDisplay() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="shadow-md top-0 sticky">
      {/* Desktop View */}
      <div className="flex py-3 bg-white justify-between px-10 items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHeartPulse} className="h-8 text-primary" />
          <h2 className="ml-2 text-2xl">Medcare.</h2>
        </div>
        <nav className="sm:flex items-center hidden justify-between">
          <ul className="flex justify-evenly items-center">
            <Link smooth to="#home" className="navLinkDesktop">
              <li>Home</li>
            </Link>
            <Link smooth to="#services" className="navLinkDesktop">
              <li>Services</li>
            </Link>
            <Link smooth to="#about" className="navLinkDesktop">
              <li>About</li>
            </Link>
            <Link smooth to="#doctors" className="navLinkDesktop">
              <li>Doctors</li>
            </Link>
            <Link smooth to="#book" className="navLinkDesktop">
              <li>Book</li>
            </Link>
            <Link smooth to="#review" className="navLinkDesktop">
              <li>Review</li>
            </Link>
            <Link smooth to="#blogs" className="navLinkDesktop">
              <li>Blogs</li>
            </Link>
          </ul>
        </nav>
        {/* Mobile View */}
        <FontAwesomeIcon
          icon={open ? faBars : faTimes}
          bounce={open ? false : true}
          onClick={handleMenuDisplay}
          className="sm:hidden"
        />
      </div>
      <ul
        className={`${
          open ? "hidden" : "block"
        } flex flex-col bg-white bg-opacity-80`}
      >
        <Link smooth to="#home" className="mx-auto my-1 hover:text-primary">
          <li>Home</li>
        </Link>
        <Link smooth to="#services" className="mx-auto my-1 hover:text-primary">
          <li>Services</li>
        </Link>
        <Link smooth to="#about" className="mx-auto my-1 hover:text-primary">
          <li>About</li>
        </Link>
        <Link smooth to="#doctors" className="mx-auto my-1 hover:text-primary">
          <li>Doctors</li>
        </Link>
        <Link smooth to="#book" className="mx-auto my-1 hover:text-primary">
          <li>Book</li>
        </Link>
        <Link smooth to="#review" className="mx-auto my-1 hover:text-primary">
          <li>Review</li>
        </Link>
        <Link smooth to="#blogs" className="mx-auto my-1 hover:text-primary">
          <li>Blogs</li>
        </Link>
      </ul>
    </div>
  );
}
