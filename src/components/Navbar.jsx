import React from "react";
import Logo1 from "../assets/images/Logo1.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a className="logo" href="/">
          <img
            src={Logo1}
            alt="Little Lemon Restaurant"
            width={"100"}
            height={"auto"}
          />
        </a>
        <ul>
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/menu">Try Our Menu</CustomLink>
          <CustomLink href="/restaurant">Enjoy Our Restaurant</CustomLink>
          <CustomLink href="/specials">Something Special</CustomLink>
        </ul>
      </nav>
    </>
  );
};

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href}>{children}</a>
    </li>
  );
}

export default Navbar;
