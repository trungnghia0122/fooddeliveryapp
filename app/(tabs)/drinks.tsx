import { View, TouchableOpacity, FlatList, Text } from "react-native"
import ItemCard from "@/components/ItemCard"
import { useState } from "react"
import FoodDetailModal from "@/components/FoodDetailModal"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Animated, useAnimatedValue } from "react-native"

const Drinks = () => {
  const drinkData = [
    {
      id: 1,
      name: "Coke",
      price: 2.99,
      image: "https://picsum.photos/400/200",
      description: "This is a description of the item",
    },
    {
      id: 2,
      name: "Sprite",
      price: 2.99,
      image: "https://picsum.photos/400/200",
      description: "This is a description of the item",
    },
    {
      id: 3,
      name: "Iced Tea",
      price: 2.99,
      image: "https://picsum.photos/400/200",
      description: "This is a description of the item",
    },
  ]

  const [selectedItem, setSelectedItem] = useState<
    (typeof drinkData)[0] | null
  >(null)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const slideAnim = useAnimatedValue(-400)

  const slideIn = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  const handleOpenModal = (item: (typeof drinkData)[0]) => {
    setIsModalOpen(true)
    setSelectedItem(item)
    slideIn()
  }

  const renderItem = ({ item }: { item: (typeof drinkData)[0] }) => (
    <TouchableOpacity onPress={() => handleOpenModal(item)}>
      <ItemCard name={item.name} price={item.price} image={item.image} />
    </TouchableOpacity>
  )

  return (
    <>
      {isModalOpen && selectedItem ? (
        <>
          <Ionicons
            onPress={() => {
              setIsModalOpen(false)
              slideAnim.setValue(-400)
            }}
            name='close'
            size={24}
            color='black'
            style={{ padding: 20 }}
          />
          <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            <FoodDetailModal
              name={selectedItem.name}
              price={selectedItem.price}
              description={selectedItem.description}
              image={selectedItem.image}
            />
          </Animated.View>
        </>
      ) : (
        <View
          style={{
            marginBottom: 50,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            Our Drinks
          </Text>
          <FlatList
            contentContainerStyle={{
              alignItems: "center",
              gap: 10,
            }}
            data={drinkData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </>
  )
}

export default Drinks
