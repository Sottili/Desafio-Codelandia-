import { useState } from "react";

import styles from "./Navbar.module.css";

// Icons
import facebook from "../assets/FacebookLogo.svg";
import twitter from "../assets/TwitterLogo.svg";
import twitch from "../assets/TwitchLogo.svg";
import discord from "../assets/DiscordLogo.svg";
import account from "../assets/User.svg";
import search from "../assets/Search.svg";
import menu from "../assets/Menu.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((current) => !current);
  }

  return (
    <>
      <header className={styles.header}>
        <div>
          <img className={styles.icon} alt="Facebook Logo" src={facebook} />
          <img className={styles.icon} alt="Twitter Logo" src={twitter} />
          <img className={styles.icon} alt="Twitch Logo" src={twitch} />
          <img className={styles.icon} alt="Discord Logo" src={discord} />
        </div>
        <div>
          <h1 className={styles.blogTitle}>BLOGAMES</h1>
        </div>
        <div>
          <img className={styles.iconMobile} alt="Sua conta" src={account} />
          <img className={styles.icon} alt="Sua conta" src={account} />
          <img className={styles.icon} alt="Lupa" src={search} />
          <img
            className={styles.icon}
            onClick={handleMenu}
            alt="Menu"
            src={menu}
          />
          <img
            className={styles.iconMobile}
            onClick={handleMenu}
            alt="Menu"
            src={menu}
          />
        </div>
      </header>
      <div className={openMenu ? styles.menuOpen : styles.menuClose}>
        <ul className={styles.secondaryHeader}>
          <li>INICIO</li>
          <li>CATEGORIAS</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
          <li className={styles.socialIcons}>
            <img
              className={styles.socialIcon}
              alt="Facebook Logo"
              src={facebook}
            />
            <img
              className={styles.socialIcon}
              alt="Twitter Logo"
              src={twitter}
            />
            <img className={styles.socialIcon} alt="Twitch Logo" src={twitch} />
            <img
              className={styles.socialIcon}
              alt="Discord Logo"
              src={discord}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
