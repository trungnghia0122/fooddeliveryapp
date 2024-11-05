import { Box } from "./ui/box"
import { Button, ButtonText } from "./ui/button"
import { Center } from "./ui/center"
import { Image, Text } from "react-native"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

interface FoodDetailModalProps {
  name: string
  price: number
  description: string
  image: any
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
        <Image source={image} style={{ width: 350, height: 200 }} />
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
          className='bg-blue-500 text-typography-900'
          variant='solid'
          size='lg'
          action='primary'
        >
          <ButtonText>ADD TO CART</ButtonText>
          <ButtonText>{price}</ButtonText>
        </Button>
      </Box>
    </Center>
  )
}

export default FoodDetailModal
