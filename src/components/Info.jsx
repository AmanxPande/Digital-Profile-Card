import React from "react";
import Image from "../images/user-hero.png";
import Mlogo from "../images/Mail.png";
import Llogo from "../images/linkedin.png";

export default function Info() {
  return (
    <div className="info">
      <img clasName="heroImage" src={Image} alt="hero-img" />
      <h1 className="info--title">Aman Pande</h1>
      <h3 className="info--sub_title">Frontend Developer </h3>
      <div className="btn-content">
        <button className="btn btn-email">
          <span>
            <img src={Mlogo} alt="" />
          </span>
          <span>Email</span>
        </button>

        <a href="https://www.linkedin.com/in/aman-pande-75ab80191">
          <button className="btn btn-linkedin">
            <span>
              <img src={Llogo} alt="" />
            </span>
            <span>LinkedIn</span>
          </button>
        </a>
      </div>
    </div>
  );
}
