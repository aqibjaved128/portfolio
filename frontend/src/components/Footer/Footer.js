import React from 'react';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer">
      <div>
      <Typography variant="h5">About Me</Typography>
      <Typography>
          Hey, my name is Aqib Javed. I am a Full-Stack Web Developer and Designer
         with a deep-rooted web development knowledge & can develop fully-functional
         website as per your requirement. 
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
      <Typography variant="h6">Social Media</Typography>
      <a href="https://github.com/aqibjaved128/" target="black">
          <BsGithub />
        </a>
        <a href="https://web.facebook.com/aqibjaved128/" target={"blank"}>
            <BsFacebook/>
        </a>
        <a href="https://www.instagram.com/aqibjaved128/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.youtube.com/@ajprogrammer" target="black">
          <BsYoutube />
        </a>
        </div>
      </div>

  )
}

export default Footer
