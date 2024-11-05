import { Box } from "./ui/box"
import { Button } from "./ui/button"
import { Center } from "./ui/center"
import { Image, Text } from "react-native"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

interface FoodDetailModalProps {
  name: string
  price: number
  description: string
  image: string
}

const FoodDetailModal = ({
  name,
  price,
  description,
  image,
}: FoodDetailModalProps) => {
  const { cartItems, setCartItems } = useContext(CartContext)

  return (
    <Center>
      <Box
        style={{
          gap: 10,
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <Image source={{ uri: image }} style={{ width: 350, height: 200 }} />
        <Box style={{ gap: 10, marginTop: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}> {name}</Text>
          <Text> {description}</Text>
        </Box>
      </Box>

      <Box>
        <Button
          onPress={() =>
            setCartItems([
              ...cartItems,
              {
                id: Date.now(),
                name: name,
                price: price,
              },
            ])
          }
          variant='outline'
          size='lg'
          action='primary'
        >
          <Text>ADD TO CART</Text>
          <Text>{price}</Text>
        </Button>
      </Box>
    </Center>
  )
}

export default FoodDetailModal
