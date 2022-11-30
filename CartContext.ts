import { createContext } from 'react'
export const CartContext = createContext({ cart: { orderDetail: [] }, setCart: (val: any) => {}});