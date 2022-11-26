import styles from '../styles/ProductCard.module.css';
import Image from 'next/image';

export default function ProductCard({ name, price }: { name: string; price: number }) {
  return (
    <div className={styles.card}>
      <Image src="/images/profile-test.jpg" alt="Test profile" width={200} height={200} />
      <p>{name}</p>
      <p>{`S$${price}`}</p>
    </div>
  );
};