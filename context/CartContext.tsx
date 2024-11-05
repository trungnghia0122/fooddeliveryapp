import CartItem from "@/components/CartItem"
import React, { createContext, useState } from "react"

interface CartItemProps {
  id: number
  name: string
  price: number
}

const CartContext = createContext<{
  cartItems: CartItemProps[]
  setCartItems: React.Dispatch<React.SetStateAction<CartItemProps[]>>
}>({
  cartItems: [],
  setCartItems: () => {},
})

const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
