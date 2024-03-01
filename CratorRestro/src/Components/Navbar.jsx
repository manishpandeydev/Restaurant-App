import React, { useEffect } from "react";
import myLogo from "../assets/newlogo.png";
import react from "../assets/react.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleActive = (event) => {
    const links = document.querySelectorAll(".myLink");
    links.forEach((link) => link.classList.remove("active1"));
    event.target.classList.add("active1");
  };



  return (
    <header className="p-3  border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="">
            <img
              style={{
                width: "8rem",
                height: "5.5rem",
                borderEndEndRadius: "5rem",
                borderEndStartRadius: "100rem",
              }}
              src="https://i.ibb.co/GRKh2br/resize-1709273361109262227logoremovebgpreview.png"
              alt="resize-1709273361109262227logoremovebgpreview"
              border="0"
            />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="px-2 myLink" onClick={toggleActive}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Menu" className="px-2 myLink" onClick={toggleActive}>
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/Booking"
                className="px-2 myLink"
                onClick={toggleActive}
              >
                Book Your seat
              </Link>
            </li>
            <li>
              <Link to="/Admin" className="px-2 myLink" onClick={toggleActive}>
                Admin Login
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
