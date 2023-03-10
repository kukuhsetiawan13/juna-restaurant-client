import React, {useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PizzaScreen from '../screens/PizzaScreen';
import PastaScreen from '../screens/PastaScreen';
import SideDishScreen from '../screens/SideDishScreen';
import DrinksAndDessertsScreen from '../screens/DrinksAndDessertsScreen';

const Tab = createMaterialTopTabNavigator();

export default function MenuTab({navigation}) {
    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', e => {
          e.preventDefault(); // Prevent default action
          unsubscribe() // Unsubscribe the event on first call to prevent infinite loop
          navigation.navigate('Home') // Navigate to your desired screen
        });
     }, [])

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { color: '#f79708' },
        tabBarIndicatorStyle: { backgroundColor: '#bf0303', height: '100%'}
      }}
    >
        <Tab.Screen name="Pizza" component={PizzaScreen} />
        <Tab.Screen name="Pasta" component={PastaScreen} />
        <Tab.Screen name="SideDish" options={{ tabBarLabel: 'Side Dish' }} component={SideDishScreen} />
        <Tab.Screen name="DrinksAndDesserts" options={{ tabBarLabel: 'Drinks & Desserts' }} component={DrinksAndDessertsScreen} />
      </Tab.Navigator>
  )
}
