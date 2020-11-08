import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={styles.contenedorFooter}>
        <div className={styles.contenidoRedes}>
          <h2>Acumulado</h2>
        </div>
        <div className={styles.contenidoBotonesFotter}>
          Test -LN :Rodrigo Benitez
        </div>
      </div>
    </div>
  );
};

export default Footer;
