import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function CartScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.itemsContainer}>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{fontWeight: 'bold'}}>Triple Cheese</Text>
            <Text style={{fontWeight: 'bold'}}>$ 30.00</Text>
          </View>
          <View style={{ marginBottom: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image
              style={styles.itemImage}
              source={{
                uri: 'https://4.bp.blogspot.com/-HYCSoeJYGEo/V83zCxzz18I/AAAAAAAAAOY/_FkriIuiYxoRY3nxbvz3d_KMxMy7ISG-QCLcB/s1600/positano.jpg',
              }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
              <View
                style={styles.addOrSubtractButton}>
                <TouchableOpacity><Text>&#x2212;</Text></TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity><Text>&#x2b;</Text></TouchableOpacity>
              </View>
              <FontAwesome5 name="trash" size={24} color="gray" />
            </View>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{fontWeight: 'bold'}}>Triple Cheese</Text>
            <Text style={{fontWeight: 'bold'}}>$ 30.00</Text>
          </View>
          <View style={{ marginBottom: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image
              style={styles.itemImage}
              source={{
                uri: 'https://4.bp.blogspot.com/-HYCSoeJYGEo/V83zCxzz18I/AAAAAAAAAOY/_FkriIuiYxoRY3nxbvz3d_KMxMy7ISG-QCLcB/s1600/positano.jpg',
              }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
              <View
                style={styles.addOrSubtractButton}>
                <TouchableOpacity><Text>&#x2212;</Text></TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity><Text>&#x2b;</Text></TouchableOpacity>
              </View>
              <FontAwesome5 name="trash" size={24} color="gray" />
            </View>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{fontWeight: 'bold'}}>Triple Cheese</Text>
            <Text style={{fontWeight: 'bold'}}>$ 30.00</Text>
          </View>
          <View style={{ marginBottom: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image
              style={styles.itemImage}
              source={{
                uri: 'https://4.bp.blogspot.com/-HYCSoeJYGEo/V83zCxzz18I/AAAAAAAAAOY/_FkriIuiYxoRY3nxbvz3d_KMxMy7ISG-QCLcB/s1600/positano.jpg',
              }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
              <View
                style={styles.addOrSubtractButton}>
                <TouchableOpacity><Text>&#x2212;</Text></TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity><Text>&#x2b;</Text></TouchableOpacity>
              </View>
              <FontAwesome5 name="trash" size={24} color="gray" />
            </View>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{fontWeight: 'bold'}}>Triple Cheese</Text>
            <Text style={{fontWeight: 'bold'}}>$ 30.00</Text>
          </View>
          <View style={{ marginBottom: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image
              style={styles.itemImage}
              source={{
                uri: 'https://4.bp.blogspot.com/-HYCSoeJYGEo/V83zCxzz18I/AAAAAAAAAOY/_FkriIuiYxoRY3nxbvz3d_KMxMy7ISG-QCLcB/s1600/positano.jpg',
              }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
              <View
                style={styles.addOrSubtractButton}>
                <TouchableOpacity><Text>&#x2212;</Text></TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity><Text>&#x2b;</Text></TouchableOpacity>
              </View>
              <FontAwesome5 name="trash" size={24} color="gray" />
            </View>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{fontWeight: 'bold'}}>Triple Cheese</Text>
            <Text style={{fontWeight: 'bold'}}>$ 30.00</Text>
          </View>
          <View style={{ marginBottom: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image
              style={styles.itemImage}
              source={{
                uri: 'https://4.bp.blogspot.com/-HYCSoeJYGEo/V83zCxzz18I/AAAAAAAAAOY/_FkriIuiYxoRY3nxbvz3d_KMxMy7ISG-QCLcB/s1600/positano.jpg',
              }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
              <View
                style={styles.addOrSubtractButton}>
                <TouchableOpacity><Text>&#x2212;</Text></TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity><Text>&#x2b;</Text></TouchableOpacity>
              </View>
              <FontAwesome5 name="trash" size={24} color="gray" />
            </View>
          </View>
        </View>
        <View style={styles.totalPriceContainer}>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{marginTop: 10, color:'gray'}}>Subtotal</Text>
              <Text style={{marginTop: 10, color:'gray'}}>$ 30.00</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{marginTop: 10, color:'gray'}}>Tax</Text>
              <Text style={{marginTop: 10, color:'gray'}}>$ 3.00</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{marginTop: 10, fontWeight:'bold'}}>Total Price</Text>
              <Text style={{marginTop: 10, fontWeight:'bold'}}>$ 33.00</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: "red",
                borderRadius: 50,
              }}
              onPress={() => console.log('kepencet')}
            >
                 <Text style={styles.orderButton}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsContainer: {
    backgroundColor: 'white',
    marginTop: 3,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  totalPriceContainer: {
    backgroundColor: 'white',
    marginTop: 3,
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  orderButton: {
    padding: 10,
    width: 100,
    color: 'red',
    textAlign: 'center'
  },
  itemImage: {
    height: 100,
    width: 100,
    borderRadius: 10
  },
  addOrSubtractButton: {
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    marginHorizontal: 20,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
  
  
})

