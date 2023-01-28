import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import PrintTransactionScreen from '../screens/PrintTransactionScreen';
import MenuTabNavigator from '../screens/MenuTabNavigator';

const Tab = createBottomTabNavigator();

export default function DashboardTab() {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Menu') {
              iconName = focused 
              ? 'ios-pizza' 
              : 'ios-pizza-outline';
            } else if (route.name === 'Cart') {
              iconName = focused 
              ? 'ios-cart' 
              : 'ios-cart-outline';
            } else if (route.name === 'PrintTransaction') {
              iconName = focused 
              ? 'ios-receipt' 
              : 'ios-receipt-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Menu" component={MenuTabNavigator} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="PrintTransaction" component={PrintTransactionScreen} />
      </Tab.Navigator>
  )
}
