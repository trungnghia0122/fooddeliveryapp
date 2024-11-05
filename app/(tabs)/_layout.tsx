import { Tabs } from "expo-router"

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: 20, // Add margin to center text vertically
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name='favorites'
        options={{
          title: "Favorites",
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name='drinks'
        options={{
          title: "Drinks",
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  )
}
