import React from "react";
import styles from "./Card.module.scss";

const Card = ({ data, cardWidth }) => {
  const { fullName, email, address, phone } = data;
  return (
    <article className={styles.card} style={{ width: cardWidth ?? "250px" }}>
      <div className={styles.cardcontent}>
        <h2>{fullName}</h2>
        <div>{address}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    </article>
  );
};

export default Card;
