import { Text, ScrollView, View } from "react-native"
import { router, Stack } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import { CartContext } from "@/context/CartContext"
import { useContext } from "react"
import { Center } from "@/components/ui/center"
import CartItem from "@/components/CartItem"
import { Button, ButtonText } from "@/components/ui/button"
import { Divider } from "@/components/ui/divider"
import { Box } from "@/components/ui/box"
import { Modal, ModalBackdrop, ModalContent } from "@/components/ui/modal"
import React from "react"

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext)
  const [showModal, setShowModal] = React.useState(false)
  const handleCheckout = () => {
    setShowModal(true)
    setCartItems([])
  }

  return (
    <View style={{ backgroundColor: "#faf4f6", flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: `Cart (${cartItems.length})`,
          headerLeft: () => (
            <Ionicons name='close' size={24} onPress={() => router.back()} />
          ),
          headerShadowVisible: false,
        }}
      />

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        size='md'
      >
        <ModalBackdrop />
        <ModalContent>
          <Center style={{ gap: 10, padding: 20 }}>
            <Ionicons name='checkmark' size={100} />
            <Text>Order Placed!</Text>
          </Center>
        </ModalContent>
      </Modal>

      {cartItems.length === 0 ? (
        <Center style={{ gap: 10, marginTop: 100 }}>
          <Ionicons name='cart' size={100} />
          <Text>No Items in Cart</Text>
          <Button
            style={{ marginTop: 20 }}
            variant='outline'
            size='lg'
            onPress={() => router.push("/(tabs)/favorites")}
          >
            <Text>Browse Menu</Text>
          </Button>
        </Center>
      ) : (
        <Box style={{ flex: 1, justifyContent: "space-between" }}>
          <ScrollView
            contentContainerStyle={{ justifyContent: "space-between" }}
          >
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            ))}
            <Divider className='my-5' />
            <Box style={{ paddingHorizontal: 20 }}>
              <Text>
                Total: $
                {cartItems
                  .reduce((sum, item) => sum + item.price, 0)
                  .toFixed(2)}
              </Text>
            </Box>
          </ScrollView>

          <Button
            onPress={handleCheckout}
            variant='solid'
            size='lg'
            style={{ marginVertical: 60, marginHorizontal: 20 }}
            className='bg-blue-500 text-typography-900'
          >
            <ButtonText>Checkout</ButtonText>
          </Button>
        </Box>
      )}
    </View>
  )
}

export default Cart
