import { useIsFocused } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, setCartEmpty, setCoupon, verifyCoupon } from '../store/middlewares/thunk';
import { priceFloatFormatter } from '../utilities/priceAndCurrencyFormatter';
import Toast from 'react-native-toast-message';


export default function Checkout({cart, navigation}) {

    const isFocused = useIsFocused();

    const dispatch = useDispatch()

    const {coupon} = useSelector( (state) => state.CouponReducer)

    const [inputTableId, setInputTableId] = useState('');
    const [errorMessageTableId, setErrorMessageTableId] = useState(false)
    const [inputCoupon, setInputCoupon] = useState('');
    const [errorMessageCoupon, setErrorMessageCoupon] = useState(false)
    const [showErrorMessageCoupon, setShowErrorMessageCoupon] = useState(false)
    const [successMessageCoupon, setSuccessMessageCoupon] = useState(false)

    useEffect(() => {
      if(!isFocused) {
        setErrorMessageTableId(false)
        setInputTableId('')
      }
      if(!isFocused && showErrorMessageCoupon) {
        setShowErrorMessageCoupon(false)
        setInputCoupon('')
      }
    }, [isFocused])


    const subTotal = priceFloatFormatter(cart.reduce((total, el) => total + (el.price * el.quantity), 0))
    const tax = priceFloatFormatter(subTotal * 0.1)
    const total = priceFloatFormatter((subTotal + tax))
    const discount = coupon?.discount || 0
    const [totalPrice, setTotalPrice] = useState(total - discount)

    const handleVerifyCoupon = () => {
      if(!inputCoupon) {
        setErrorMessageCoupon('You must provide a valid coupon.')
        setSuccessMessageCoupon(false)
        dispatch(setCoupon({}))
        return setShowErrorMessageCoupon(true)
      }

      dispatch(verifyCoupon(inputCoupon, subTotal))
      .then((res) => {
        setShowErrorMessageCoupon(false)
        setSuccessMessageCoupon(true)
        dispatch(setCoupon(res.data))
        if(res.data.type === 'discount') {
          setTotalPrice(total - res.data.discount)
        }
      })
      .catch((err) => {
        setShowErrorMessageCoupon(true)
        setErrorMessageCoupon(err.response.data.message)
        setSuccessMessageCoupon(false)
        dispatch(setCoupon({}))
      })
    }

    useEffect(() => {
      if(Object.keys(coupon).length !== 0) {
        setInputCoupon(coupon.name)
        setSuccessMessageCoupon(true)
      }
    }, [coupon])

    useEffect(() => {
      setTotalPrice(total - discount)
    }, [discount])

    const handleCheckout = () => {
      if(!inputTableId) return setErrorMessageTableId(true)
      else setErrorMessageTableId (false)

      dispatch(addTransaction(inputTableId))
      .then((res) => {
        dispatch(setCoupon({}))
        dispatch(setCartEmpty())
        Toast.show({
          type: 'success',
          text1: `Your transaction has been made.`,
          text2: `Total Items: ${res.data.totalItems}, Total Price: ${res.data.totalPrice.toFixed(2)}, Transaction ID: ${res.data.id}`
        });
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          text1: err.response.data.message,
        });
      })
    }

     

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
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginTop: 10}}>Discount</Text>
                <Text style={{marginTop: 10}}>$ {discount}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginTop: 10, fontWeight: 'bold'}}>Total Price (after Discount)</Text>
                <Text style={{marginTop: 10, fontWeight: 'bold'}}>$ {totalPrice}</Text>
            </View>
        </View>
        <View style={{marginVertical: 20}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              style={styles.input}
              placeholder="Your Table ID"
              onChangeText={(value) => setInputTableId(value)}
              value={inputTableId}
            />
          </View>
          {
            errorMessageTableId &&
            <View>
              <Text style={{color: '#e60000', fontSize: 10}}>You must provide your table ID.</Text>
            </View>
          }
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <TextInput
              style={styles.input}
              placeholder="Add Coupon"
              onChangeText={(value) => setInputCoupon(value)}
              value={inputCoupon}
            />
            <TouchableOpacity
              style={{borderRadius: 5, backgroundColor: '#e60000', width: 100, height: '80%', marginTop: 12, padding: 10}}
              onPress={() => handleVerifyCoupon()}
            >
              <Text style={{textAlign: 'center', color: 'white'}}>Verify</Text>
            </TouchableOpacity>
          </View>
          {
            successMessageCoupon &&
            <View>
              <Text style={{color: 'green', fontSize: 10}}>Yeay!! This coupon has been applied.</Text>
            </View>
          }
          {
            showErrorMessageCoupon &&
            <View>
              <Text style={{color: '#e60000', fontSize: 10}}>{errorMessageCoupon}</Text>
            </View>
          }
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
            <TouchableOpacity
            style={{
                borderWidth: 2,
                borderColor: "red",
                borderRadius: 50,
            }}
            onPress={() => handleCheckout()}
            >
                <Text style={styles.orderButton}>Checkout</Text>
            </TouchableOpacity>
        </View>
        <Toast 
          position='bottom'
          bottomOffset={20}
        />
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
    },
    input: {
      width: '70%',
      height: 40,
      marginTop: 12,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#e6ac00',
      padding: 10,
    },
    
  })
