import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <div className={styles.contenedorMenu}>
        <div className={styles.contenidoBuscador}>
          <div className={styles.hamburguesaMenu}>
            <img src="" alt="" />
          </div>
          <div className={styles.busadorInput}>
            <input type="text" placeholder="Buscar" />
          </div>
        </div>
        <div className={styles.LogoMenu}>
          <img src="/images/logo.png" alt="" />
        </div>
        <div className={styles.contenidoBotones}>
          <button>boton1</button>
          <button>boton2</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
