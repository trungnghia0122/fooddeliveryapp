import { Center } from "@/components/ui/center"
import { View, Text } from "react-native"

const Index = () => {
  return (
    <Center
      style={{
        justifyContent: "center",
        paddingHorizontal: 40,
        gap: 20,
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        WELCOME TO THE FOOD DELIVERY APP
      </Text>
      <Text style={{ fontSize: 12, textAlign: "center" }}>
        This is a react native app that clones basic functionalities as any food
        delivery app. These functionalities include menu browsing, adding to
        cart, and order placement. The tech stack includes, React Native/Expo:
        Mobile Development, Typescript: Frontend, Context API: State Management
      </Text>
    </Center>
  )
}

export default Index
