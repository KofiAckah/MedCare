import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <h2 className="head2">Quick Links</h2>
          <ul>
            <Link smooth to="#home" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Home</li>
            </Link>
            <Link smooth to="#services" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Services</li>
            </Link>
            <Link smooth to="#about" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">About</li>
            </Link>
            <Link smooth to="#doctors" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Doctors</li>
            </Link>
            <Link smooth to="#book" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Book</li>
            </Link>
            <Link smooth to="#review" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Review</li>
            </Link>
            <Link smooth to="#blogs" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Blogs</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="head2">Our Services</h2>
          <ul>
            <Link smooth to="" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Cardiology</li>
            </Link>
            <Link smooth to="" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Dental Care</li>
            </Link>
            <Link smooth to="" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Eye Care</li>
            </Link>
            <Link smooth to="" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Neurology</li>
            </Link>
            <Link smooth to="" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Orthopedic</li>
            </Link>
            <Link smooth to="" className="LinkFoot">
              <FontAwesomeIcon icon={faChevronRight} className="arrowRight" />
              <li className="liTags">Pediatric</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="head2">Contact Info</h2>
          <ul>
            <Link to="tel:+233262092037" className="LinkFoot">
              <FontAwesomeIcon icon={faPhone} className="arrowRight" />
              <li className="liTags">+233-26-209-2037</li>
            </Link>
            <Link to="tel:+233256411975" className="LinkFoot">
              <FontAwesomeIcon icon={faPhone} className="arrowRight" />
              <li className="liTags">+233-25-641-1975</li>
            </Link>
            <Link to="mailto:livingstone@gmail.com" className="LinkFoot">
              <FontAwesomeIcon icon={faEnvelope} className="arrowRight" />
              <li className="liTags">livingstone@gmail.com</li>
            </Link>
            <Link to="mailto:site@mymail.com" className="LinkFoot">
              <FontAwesomeIcon icon={faEnvelope} className="arrowRight" />
              <li className="liTags">site@mymail.com</li>
            </Link>
            <Link className="LinkFoot">
              <FontAwesomeIcon icon={faLocationDot} className="arrowRight" />
              <li className="liTags">Accra, Ghana</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="head2">Follow Us</h2>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center">
        <p className="text-gray-600">
          Created By <span className="text-primary">Livingstone Ackah</span> | ©
          2024 All Rights Reserved
        </p>
      </div>
    </div>
  );
}
