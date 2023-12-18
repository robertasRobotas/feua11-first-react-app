import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <header className={styles.header}></header>

      <main className={styles.main}>
        <div className={styles.card}>
          <img src="https://traveler.marriott.com/wp-content/uploads/2022/02/Crete-Greece-545660058.jpg" />
          <h3>Crete</h3>
        </div>

        <div className={styles.card}>
          <img src="https://lp-cms-production.imgix.net/2022-11/Malta-iStock-1296277157-RFE.jpeg?sharp=10&vib=20&w=1200&w=600&h=400" />
          <h3>Malta</h3>
        </div>

        <div className={styles.card}>
          <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/4e2cf6c9eb419cdf9410e59aec80b68570148e1a/big-07e0f002125d8043681a463f1e4580d4.jpg" />
          <h3>Lofoten</h3>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
