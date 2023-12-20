import styles from "./styles.module.css";

const Card = ({ imgUrl, title }) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
