import React from "react";

export const BookingForm = ({ handleClick }) => {
  return (
    <>
      <div className="center">
        <form action="">
          <label htmlFor="res-date">
            <p>Choose Date</p>
            <input type="date" id="res-date" />
          </label>
          <label htmlFor="res-time">
            <p>Choose Time</p>
            <select name="res-time" id="res-time">
              <option value="">--Please choose an option--</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
          </label>
          <label htmlFor="guests">
            <p>For how many people?</p>
            <input id="guests" type="number" placeholder={1} min={1} max={10} />
          </label>
          <label htmlFor="occasion">
            <p>Is it a special Occasion?</p>
            <select name="occasion" id="occasion">
              <option value="">--Please choose the occasion--</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="graduation">Graduation</option>
            </select>
          </label>
          <input
            type="submit"
            value={"Make Your Reservation"}
            onClick={handleClick}
          />
        </form>
      </div>
    </>
  );
};
