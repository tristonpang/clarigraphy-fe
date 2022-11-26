import styles from '../styles/IntroMenu.module.css';

const IntroMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1 className={styles.title}>
          Clarigraphy
        </h1>
      </div>

      <div className={styles.navBar}>
        <a href="https://nextjs.org/docs" className={styles.navBarButton}>About</a>
        <a href="https://nextjs.org/docs" className={styles.navBarButton}>Shop</a>
        <a href="https://nextjs.org/docs" className={styles.navBarButton}>Giving - Christmas Donations</a>
        <a href="https://nextjs.org/docs" className={styles.navBarButton}>Get in touch</a>
      </div>
    </div>
  );
}

export default IntroMenu;