import React from "react";
import { useForm } from "react-hook-form";

export const BookingForm = () => {
  const form = useForm();
  const { register, handleSubmit, reset } = form;

  const onSubmit = (data) => {
    console.log(data);
    console.log("ressss", data.resTime);
    reset();
  };

  return (
    <>
      <div className="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="resDate">
            <p>Choose Date</p>
            <input type="date" id="resDate" {...register("resDate")} />
          </label>
          <label htmlFor="resTime">
            <p>Choose Time</p>
            <select name="resTime" id="resTime" {...register("resTime")}>
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
            <input
              id="guests"
              type="number"
              placeholder={1}
              min={1}
              max={10}
              {...register("guests")}
            />
          </label>
          <label htmlFor="occasion">
            <p>Is it a special Occasion?</p>
            <select name="occasion" id="occasion" {...register("occasion")}>
              <option value="">--Please choose the occasion--</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="graduation">Graduation</option>
            </select>
          </label>
          <button type="submit">Click to make your reservation</button>
        </form>
      </div>
    </>
  );
};
