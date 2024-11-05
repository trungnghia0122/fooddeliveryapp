import { Card } from "@/components/ui/card"
import { Box } from "./ui/box"
import { Image, Text } from "react-native"

interface ItemCardProps {
  name: string
  price: number
  image: string
}

const ItemCard = ({ name, price, image }: ItemCardProps) => {
  return (
    <Card style={{ gap: 20 }}>
      <Box>
        <Image source={{ uri: image }} style={{ width: 350, height: 200 }} />
      </Box>
      <Box style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{name}</Text>
        <Text>${price.toFixed(2)}</Text>
      </Box>
    </Card>
  )
}

export default ItemCard