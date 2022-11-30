import styles from '../styles/IntroMenu.module.css';
import { MdShoppingCart } from 'react-icons/md'
import { IconContext } from 'react-icons';
import Link from 'next/link'
const IntroMenu = () => {
  return (
    <div className={styles.container}>
      <IconContext.Provider value={{ size: '2rem' }}>
        <Link href='/cartPage' className={styles.cart}>
          <MdShoppingCart />
        </Link>
      </IconContext.Provider>
      <div className={styles.banner}>
        <Link href="/">
          <h1 className={styles.title}>
            Clarigraphy
          </h1>
        </Link>
      </div>
        <div className={styles.navBar}>
          <Link href="/#about" className={styles.navBarButton}>About</Link>
          <Link href="/#shop" className={styles.navBarButton}>Shop</Link>
          <Link href="/#giving" className={styles.navBarButton}>Giving - Christmas Donations</Link>
          <Link href="/#contact" className={styles.navBarButton}>Get in touch</Link>
        </div>
    </div>
  );
}

export default IntroMenu;