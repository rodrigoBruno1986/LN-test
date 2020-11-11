import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footer_icon_top}>
          <div className={styles.footer_redes}>
            <img
              className={styles.img_redes}
              src="/images/face.png"
              alt="facebook"
            />
            <img
              className={styles.img_redes}
              src="/images/tw.png"
              alt="facebook"
            />
            <img
              className={styles.img_redes}
              src="/images/insta.png"
              alt="facebook"
            />
            <img
              className={styles.img_redes}
              src="/images/red.png"
              alt="facebook"
            />
          </div>
          <div className={styles.footer_block_logo}>
            <img
              className={styles.img_logo_small}
              src="/images/logo-la-nacion.png"
              alt="Logo"
            />
          </div>
          <div className={styles.footer_block_appicons}>
            <img
              className={styles.img_apple_small}
              src="/images/apple-store-badge.png"
              alt="Lsdogo"
            />
            <img
              className={styles.img_google_small}
              src="/images/google-play-badge.png"
              alt="Logo"
            />
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <div className={styles.footer_links_left}>
            <a
              className={styles.ln_link}
              href="http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html"
            >
              Mapa del sitio
            </a>
            <a
              className={styles.ln_link}
              href="https://micuenta.lanacion.com.ar/ayuda"
            >
              Ayuda
            </a>
            <a
              className={styles.ln_link}
              href="https://micuenta.lanacion.com.ar/tyc"
            >
              Términos y Condiciones
            </a>
            <a
              className={styles.ln_link}
              href="https://micuenta.lanacion.com.ar/tyc"
            >
              Subscribirse al diario impreso
            </a>
          </div>
          <div className={styles.footer_links_right}>
            <a
              className={styles.ln_linkblk}
              href="http://especiales.lanacion.com.ar/varios/mapa-sitio/index.html"
            >
              Protegido por re CAPTCHA
            </a>
            <a
              className={styles.lnlink}
              href="https://micuenta.lanacion.com.ar/ayuda"
            >
              Condiciones
            </a>
            <a
              className={styles.lnlink}
              href="https://micuenta.lanacion.com.ar/tyc"
            >
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
