import { useState } from 'react';
import HomePage from './homePage'

export async function getStaticProps() {
  const res = await fetch('http://159.223.77.56/products');
  const productsJson = await res.json();
  // console.log(productsJson);
  return {
    props: {
      products: productsJson
    }
  };
}

export default function Home({ products, cart }: any) {
  // const [cart, setCart] = useState([])
  console.log(cart)
  return (
    <HomePage products={products} cart={cart} />
  )
}
