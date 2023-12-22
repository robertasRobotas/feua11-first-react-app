import styles from "./styles.module.css";

const Song = ({ title, artist }) => {
  return (
    <div className={styles.card}>
      <div>{title}</div>
      <div>{artist}</div>
    </div>
  );
};

export default Song;
