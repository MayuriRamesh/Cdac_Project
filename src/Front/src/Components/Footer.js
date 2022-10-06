import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="http://www.google.com"> <InstagramIcon /> </a>
        <a href="http://www.google.com">  <TwitterIcon /> </a>
        <a href="http://www.google.com"> <FacebookIcon /> </a>
        <a href="http://www.google.com"> <LinkedInIcon /> </a>
      </div>

      <div className="fc">
         <p> <strong>Contact us: </strong><br/>
           Addr: Sector-2, Shanti nagar, Meera road, Mumbai <br />
           Mail Id:<a href="http://mail.google.com"> EziMovers@gmail.com<br /></a>
           Mob.no: 888 5500 888<br /> </p>
      </div>
      
    </div>
  );
}

export default Footer;