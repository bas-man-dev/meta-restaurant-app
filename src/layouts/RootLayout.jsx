import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Logo1 from "../assets/images/Logo1.png";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <h1 style={{ margin: "5%" }}>Welcome to The Little Lemon Restaurant</h1>
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
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="booking">Table Booking</NavLink>
            </li>
            <li>
              <NavLink to="about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ marginTop: "5%" }}>
        <Outlet />
      </main>
    </div>
  );
}
