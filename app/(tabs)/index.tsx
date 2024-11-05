import { Center } from "@/components/ui/center"
import { View, Text } from "react-native"

const Index = () => {
  return (
    <Center
      style={{
        marginTop: 100,
        justifyContent: "center",
        marginHorizontal: 40,
        gap: 40,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        WELCOME TO THE FOOD DELIVERY APP
      </Text>
      <Text style={{ fontSize: 12, textAlign: "center" }}>
        This is a react native app that clones basic functionalities as any food
        delivery app. These functionalities include menu browsing, adding to
        cart, order placement, and user authentication. The tech stack includes,
        React Native/Expo: Mobile Development, Typescript: Frontend, Context
        API: State Management, and Firebase: Backend/Database.
      </Text>
    </Center>
  )
}

export default Index
