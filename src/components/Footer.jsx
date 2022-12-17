import React from "react";

import FacebookIcon from "../images/Facebook-Icon.png";
import InstagramIcon from "../images/Instagram-Icon.png";
import GitHubIcon from "../images/GitHub-Icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.facebook.com/aman.pande.585">
        <img src={FacebookIcon} className="social-icons" alt="" />
      </a>

      <a href="https://www.instagram.com/_amanxpande_/">
        <img src={InstagramIcon} className="social-icons" alt="" />
      </a>

      <a href="https://github.com/AmanxPande">
        <img src={GitHubIcon} className="social-icons" alt="" />
      </a>
    </footer>
  );
}
