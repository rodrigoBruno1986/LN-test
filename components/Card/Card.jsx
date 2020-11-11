import React from "react";
import styles from "./Card.module.scss";

const Card = ({ articulo }) => {
  const fecha = new Date(articulo.display_date);
  return (
    <div>
      <div className={styles.contenidoCarta}>
        <div className={styles.imagenCarta}>
          <img src={articulo.promo_items.basic.url} alt="" />
        </div>
        <div className={styles.tituloCarta}>
          <p>{articulo.headlines.basic}</p>
        </div>
        <div className={styles.fechaCarta}>
          {fecha.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
