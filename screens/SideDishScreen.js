import React, { useEffect } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ItemMenu from '../components/ItemMenu';

export default function SideDishScreen() {

  const {sideDish} = useSelector( (state) => state.FoodReducer)

  // useEffect(() => {
  //   console.log(sideDish, "sideDish di screen")
  // }, [sideDish])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={sideDish}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return <ItemMenu item={item}/>
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
  }

})

