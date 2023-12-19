import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>Trip App</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">option 1</a>
          </li>
          <li>
            <a href="#">option 2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
