import styles from '../styles/ProductCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ _id, name, price, details, picLink }: { _id: string, name: string; price: number; details: string; picLink: string; }) {
  return (
    <Link href={{ pathname: '/productPage', query: { _id, name, price, details, picLink }}} className={styles.card}>
      <Image src={picLink} alt="Test profile" width={200} height={200} />
      <p>{name}</p>
      <p>{`S$${price}`}</p>
    </Link>
  );
};