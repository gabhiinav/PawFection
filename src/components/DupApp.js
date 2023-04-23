import './DupApp.css';
import React, { useState } from 'react';
import BookingHome from './BookingHome';
import PawFection_logo from './img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDog } from '@fortawesome/free-solid-svg-icons';

function DupApp() {  
  const [location, setLocation] = useState("");
  const [petType, setPetType] = useState("");
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(true);

  const validateForm = (event) => {
    event.preventDefault();
    const status = document.querySelector(".status");

    let validation = "Please fill-in the above fields";

    if (!location || !petType) {
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      console.log("inputs validated");
      status.classList.remove("active");

      // redirect to next page
      setTimeout(() => {
        let container = document.querySelector(".container");
        let wrapper = document.querySelector(".wrapper");
        setHide(!hide + wrapper.classList.add("hide"));
        setShow(!show + container.classList.add("show"));
      }, 1000);
    }
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handlePetType = (event) => {
    setPetType(event.target.value);
  };

  return (
    <div className="DupApp">
      <BookingHome />
      <div className="wrapper">
        <div className="content">
          <div className="logo">
            <img src={PawFection_logo} alt="" />
          </div>
          <div className="c1">
            <span>Book a pet sitter today</span>
          </div>
          <div className="form">
            <div className="status"></div>
            <form action="#" onSubmit={validateForm}>
              <div className="eInput">
                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                <input
                  type="text"
                  placeholder="Enter Location"
                  value={location}
                  onChange={handleLocation}
                />
              </div>
              <div className="eInput">
                <FontAwesomeIcon className="icon" icon={faDog} />
                <input
                  type="text"
                  placeholder="Enter Pet Type"
                  value={petType}
                  onChange={handlePetType}
                />
              </div>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}

export default DupApp;