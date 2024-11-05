import { Stack, router } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Text } from "@/components/ui/text"
import "@/global.css"
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider"
import { View } from "react-native"
import { CartProvider } from "@/context/CartContext"

export default function RootLayout() {
  return (
    <CartProvider>
      <GluestackUIProvider mode='light'>
        <Stack>
          <Stack.Screen
            name='(tabs)'
            options={{
              headerLeft: () => (
                <Ionicons name='person-circle' size={24} color='black' />
              ),
              headerRight: () => (
                <Ionicons
                  onPress={() => router.push("/(screens)/Cart")}
                  name='cart'
                  size={24}
                  color='black'
                />
              ),
              headerTitle: () => (
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text>Pickup ASAP - Sachse</Text>
                  <Ionicons name='chevron-down' size={20} color='black' />
                </View>
              ),
              headerShadowVisible: false,
            }}
          />
        </Stack>
      </GluestackUIProvider>
    </CartProvider>
  )
}
