import { TouchableOpacity, FlatList, View, Text } from "react-native"
import ItemCard from "@/components/ItemCard"
import { useState } from "react"
import FoodDetailModal from "@/components/FoodDetailModal"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Animated, useAnimatedValue } from "react-native"

const Favorites = () => {
  const foodData = [
    {
      id: 1,
      name: "Pelehu Plate",
      price: 14.99,
      image: "https://picsum.photos/400/200",
      description: "This is a description of the item",
    },
    {
      id: 2,
      name: "Spicy Chicken Plate",
      price: 14.99,
      image: "https://picsum.photos/400/200",
      description: "This is a description of the item",
    },
    {
      id: 3,
      name: "Shaking Beef Plate",
      price: 14.99,
      image: "https://picsum.photos/400/200",
      description: "This is a description of the item",
    },
    {
      id: 4,
      name: "Duck Plate",
      price: 14.99,
      image: "https://picsum.photos/400/200",
      description: "This is a description of the item",
    },
  ]

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const [selectedItem, setSelectedItem] = useState<(typeof foodData)[0] | null>(
    null
  )

  const slideAnim = useAnimatedValue(-400)

  const slideIn = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  const handleItemPress = (item: (typeof foodData)[0] | null) => {
    setSelectedItem(item)
    setIsModalVisible(true)
    slideIn()
  }

  const renderItem = ({ item }: { item: (typeof foodData)[0] }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <ItemCard name={item.name} price={item.price} image={item.image} />
    </TouchableOpacity>
  )

  return (
    <>
      {isModalVisible && selectedItem ? (
        <>
          <Ionicons
            onPress={() => {
              setIsModalVisible(false)
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
            Our Favorites
          </Text>

          <FlatList
            contentContainerStyle={{
              alignItems: "center",
              gap: 10,
            }}
            data={foodData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </>
  )
}

export default Favorites
