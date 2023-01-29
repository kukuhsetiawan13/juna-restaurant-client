import { } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { priceFloatFormatter } from '../utilities/priceAndCurrencyFormatter';

export default function Checkout({cart}) {

    const subTotal = priceFloatFormatter(cart.reduce((total, el) => total + (el.price * el.quantity), 0))
    const tax = priceFloatFormatter(subTotal * 0.1)
    const total = priceFloatFormatter((subTotal + tax))
    

  return (

    <View style={styles.totalPriceContainer}>
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginTop: 10, color:'gray'}}>Subtotal</Text>
                <Text style={{marginTop: 10, color:'gray'}}>$ {subTotal}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginTop: 10, color:'gray'}}>Tax</Text>
                <Text style={{marginTop: 10, color:'gray'}}>$ {tax}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginTop: 10, fontWeight:'bold'}}>Total Price</Text>
                <Text style={{marginTop: 10, fontWeight:'bold'}}>$ {total}</Text>
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
  )
}

const styles = StyleSheet.create({
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
    }
    
  })
