import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p className={styles.language}>PT-BR</p>
        </div>
        <ul className={styles.listFooter}>
          <li>
            <a href="/#">Sobre</a>
          </li>
          <li>
            <a href="/#">Termos de Serviço</a>
          </li>
          <li>
            <a href="/#">Política de privacidade</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
