import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const switchMenu = () => setToggleMenu(!toggleMenu);

  useEffect(() => {}, []);
  return (
    <div>
      <header className={styles.main_header}>
        <div className={styles.head_block_search}>
          <div className={styles.switch_icon}>
            <div onClick={switchMenu}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
            </div>
            <div className={styles.icon_title}>{`${
              toggleMenu ? "Menu" : "Cerrar"
            }`}</div>
            <div className={styles.input_container}>
              <input
                className="input_field"
                type="text"
                placeholder="Buscar"
                name="usrnm"
              />
            </div>
          </div>
        </div>
        <div className={styles.head_block_logo}>
          <img
            className={styles.img_logo}
            src="/images/logo-la-nacion.png"
            alt="Logo"
          />
        </div>
        <div className={styles.head_block_links}>
          <button className={styles.btn_subscribe}>Suscribite</button>
          <button className={styles.btn_login}>Ingresar</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
