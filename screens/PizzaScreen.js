import React, { useEffect } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ItemMenu from '../components/ItemMenu';

export default function PizzaScreen() {

  const {pizza} = useSelector( (state) => state.FoodReducer)

  // useEffect(() => {
  //   console.log(pizza, "pizza di screen")
  // }, [pizza])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={pizza}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <ItemMenu item={item}/>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 5,
    paddingTop: 10,
    backgroundColor: '#E2E7F0'
  },
  listContainer: {
    alignItems: 'center',
  },
})
