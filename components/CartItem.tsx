import { Text } from "./ui/text"
import { Card } from "./ui/card"
import { Center } from "./ui/center"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

interface CartItemProps {
  id: number
  name: string
  price: number
}

const CartItem = ({ name, price, id }: CartItemProps) => {
  const { cartItems, setCartItems } = useContext(CartContext)

  const handleDelete = () => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <Card
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <Text>{name}</Text>
      <Center style={{ gap: 20, flexDirection: "row" }}>
        <Text>${price}</Text>
        <Ionicons onPress={handleDelete} name='trash' size={15} color='black' />
      </Center>
    </Card>
  )
}

export default CartItem
