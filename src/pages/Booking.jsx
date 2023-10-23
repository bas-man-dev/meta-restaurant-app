import React from "react";
import { BookingForm } from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

export const Booking = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("Thanks ! Form Submitted we'll be in contact soon");
    navigate("/");
  };
  return (
    <>
      <main>
        <h1 className="heading">Booking</h1>
        <BookingForm handleClick={handleClick} />
      </main>
    </>
  );
};
