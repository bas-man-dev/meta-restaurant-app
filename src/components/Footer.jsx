import React from "react";
import Logo1 from "../assets/images/Logo1.png";

const Footer = () => {
  const date = new Date()
  return (
    <>
      <footer>
        <img className="footer-logo"
          src={Logo1}
          alt="Little Lemon Restaurant"
          width={"50"}
          height={"auto"}
        />
        <span>Copyright Bas Maw @ Little Lemon Restaurant {`2023 - ${date.getFullYear() > 2023 ? date.getFullYear : ''}`}</span>
      </footer>
    </>
  );
};

export default Footer;
