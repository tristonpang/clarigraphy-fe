import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState([])

  return <Component {...pageProps} cart={cart} setCart={setCart} />
}
