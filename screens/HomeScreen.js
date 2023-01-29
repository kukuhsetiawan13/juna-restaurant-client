import React, { useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoupons } from '../store/middlewares/thunk';
import Coupon from '../components/Coupon';

export default function HomeScreen() {
  
  const dispatch = useDispatch()

  const {coupons} = useSelector( (state) => state.CouponReducer)

  useEffect(() => {
    dispatch(fetchCoupons())
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={coupons}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <Coupon item={item}/>
          )
        }}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  list: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },

  
})
