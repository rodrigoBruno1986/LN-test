import React from "react";
import styles from "./Card.module.scss";

const Card = ({ articulo }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const fecha = new Date(articulo.display_date);

  return (
    <div>
      <div className={styles.contenidoCarta}>
        <div className={styles.imagenCarta}>
          {articulo.promo_items ? (
            <img src={articulo.promo_items.basic.url} alt="" />
          ) : null}
        </div>
        <div className={styles.tituloCarta}>
          <p>{articulo.headlines.basic}</p>
        </div>
        <div className={styles.fechaCarta}>
          {fecha.toLocaleDateString("es-ES", options)}
        </div>
      </div>
    </div>
  );
};

export default Card;
