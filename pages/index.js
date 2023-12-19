import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <Card />
        <Card />
        <Card />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
