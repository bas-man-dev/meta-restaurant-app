import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export const Reviews = () => {
  const reviews = [
    { id: 0, rev: "Food was fast and on time, Loved it!", short: "Loved it!" },
    {
      id: 1,
      rev: "Birthday Party was a great success, thanks Leo",
      short: "Birthday Party",
    },
    { id: 2, rev: "My favourite restaurant in Chicago", short: "My favourite" },
    {
      id: 3,
      rev: "The portion sizes were huge, and the atmosphere was great",
      short: "Great Atmosphere",
    },
  ];
  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    image: {
      display: "block",
      margin: "0 auto",
      maxWidth: "80%",
      height: "auto",
      borderRadius: "8px",
    },
    carousel: {
      maxWidth: "80%",
      margin: "0 auto",
      gap: "2rem",
    },
    list: {
      listStyle: "none",
      padding: "0",
      textAlign: "left",
    },
    listItem: {
      fontSize: "16px",
      marginBottom: "10px",
      borderBottom: "1px solid #ccc",
      padding: "10px 0",
    },
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Reviews of the restaurant</h2>
      <div style={styles.container}>
        <img
          src="https://static9.depositphotos.com/1037987/1189/i/600/depositphotos_11893666-stock-photo-family-eating-lunch-together-in.jpg"
          alt="a family at lunch"
          style={styles.image}
        />
        <Carousel style={styles.carousel}>
          {reviews.map((review) => (
            <Carousel.Item key={review.id} style={{ marginTop: "5%" }}>
              <p>{review.rev}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div style={styles.container}>
        <h3 style={styles.heading}>Reviews As a List for accessibility</h3>
        <ul style={styles.list}>
          {reviews.map((review) => (
            <li style={styles.listItem} key={review.id}>
              Review : {review.rev}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
