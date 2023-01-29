import React, { useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Checkout from '../components/Checkout';
import ItemCart from '../components/ItemCart';

export default function CartScreen({navigation}) {

  const {cart} = useSelector( (state) => state.CartReducer)

  // useEffect(() => {
  //   console.log(cart)
  // }, [cart])

  return (
    <View style={styles.container}>

      <FlatList
        data={cart}
        horizontal={false}
        keyExtractor={item => {
          return item.id
        }}
        ListFooterComponent={() => <Checkout navigation={navigation} cart={cart}/> }
        renderItem={({ item }) => {
          return (
            <ItemCart item={item}/>
          )
        }}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }  
  
})

