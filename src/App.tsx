import Navbar from "./components/navbar";

import styles from "./App.module.css";
import Footer from "./components/footer";

import ArrowDown from "./assets/ArrowDown.svg";

function App() {
  return (
    <>
      <main>
        {/* Navbar */}
        <Navbar />
        {/*Seção de Posts */}
        <section className={styles.sectionPosts}>
          <div className={styles.contentCards}>
            <div className={styles.xboxCard}>
              <p className={styles.mutedP}>19 de outubro, 2023</p>
              <p className={styles.titleCard}>
                Xbox: consoles ganham atualizações com novos recursos
              </p>
            </div>
            <div className={styles.cyberPunkCard}>
              <p className={styles.mutedP}>4 de outubro, 2023</p>
              <p className={styles.titleCard}>Cyberpunk vai ganhar novo jogo</p>
            </div>
            <div className={styles.multiVersusCard}>
              <p className={styles.mutedP}>27 de outubro, 2023</p>
              <p className={styles.titleCard}>
                Coringa pode aparecer em multiversus em breve
              </p>
            </div>
          </div>
          <div className={styles.nfsCard}>
            <p className={styles.mutedP}>30 de agosto, 2023</p>
            <p className={styles.titleCardNfs}>
              EA Games confirma novo jogo e janela de lançamento
            </p>
          </div>
        </section>
        <div className={styles.contentBtn}>
          <button className={styles.btnLoadMore}>
            Carregar mais <img alt="Carregar Mais" src={ArrowDown} />
          </button>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
