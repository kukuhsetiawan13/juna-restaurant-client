import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import {addTransaction, fetchTransaction} from '../store/middlewares/thunk'
import Toast from 'react-native-toast-message';


export default function PrintTransactionScreen() {

  const isFocused = useIsFocused()
  useEffect(() => {
    if(!isFocused) setShowErrorMessage(false)
  }, [isFocused])

  const dispatch = useDispatch()

  const [inputTransactionId, setInputTransactionId] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [theSearchedTransaction, setTheSearchedTransaction] = useState({})

  const handlePrintTransaction = (navigation) => {
    if(!inputTransactionId || !inputPassword) return setShowErrorMessage(true)

    dispatch(fetchTransaction(inputTransactionId, inputPassword))
    .then((res) => {
      setTheSearchedTransaction(res.data)
    })
    .catch((err) => {
      Toast.show({
        type: 'error',
        text1: err.response.data.message,
      });
      setTheSearchedTransaction({})
    })
  }

  return (
    <View>
      <View style={{ alignItems: 'center'}}>
        <Text style={{textAlign: 'center', marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>Print Transaction</Text>
        <TextInput
          style={styles.input}
          placeholder="Type the transaction ID"
          onChangeText={(value) => setInputTransactionId(value)}
          value={inputTransactionId}
        />
        <TextInput
          style={styles.input}
          placeholder="Type the password"
          onChangeText={(value) => setInputPassword(value)}
          value={inputPassword}
        />
        {
          showErrorMessage &&
          <View>
            <Text style={{fontSize: 10, color: 'red'}}>You must provide transaction ID and password.</Text>
          </View>
        }
        <TouchableOpacity style={styles.printButton} onPress={() => handlePrintTransaction()}>
          <Text style={{textAlign: 'center', color: 'white', paddingTop: 5}}>Print</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.title}>Transaction ID</Text>
          </View>
          <View>
            <Text style={styles.title}>{theSearchedTransaction?.id}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text>Total Items</Text>
          </View>
          <View>
            <Text>{theSearchedTransaction?.totalItems}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text>Total Price</Text>
          </View>
          <View>
            <Text>$ {theSearchedTransaction?.totalPrice?.toFixed(2) || 0}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text>Table ID</Text>
          </View>
          <View>
            <Text>{theSearchedTransaction?.tableId}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
          <View>
            <Text>Coupon</Text>
          </View>
          <View>
            <Text>{theSearchedTransaction?.coupon}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={theSearchedTransaction?.orders}
            keyExtractor={item => {
              return item.id
            }}
            renderItem={({ item }) => {
              return (
                <View style={styles.transactionItemContainer}>
                  <View style={styles.transactionItem}>
                    <View>
                      <Text>Name</Text>
                    </View>
                    <View>
                      <Text>{item.Food.name}</Text>
                    </View>
                  </View>
                  <View style={styles.transactionItem}>
                    <View>
                      <Text>Quantity</Text>
                    </View>
                    <View>
                      <Text>{item.quantity}</Text>
                    </View>
                  </View>
                  <View style={styles.transactionItem}>
                    <View>
                      <Text>Total Price</Text>
                    </View>
                    <View>
                      <Text>$ {(item.price * item.quantity).toFixed(2)}</Text>
                    </View>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </View>
      <Toast 
        position='bottom'
        bottomOffset={20}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  input: {
    width: '70%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e6ac00',
    padding: 10,
  },
  printButton: {
    marginTop: 40,
    height: 30,
    backgroundColor: '#e6ac00',
    borderRadius: 5,
    width: '70%',
    alignContent: 'center'
  },
  title: {
    fontWeight: 'bold'
  },
  transactionContainer: {
    padding: 10,
    marginHorizontal: 10,
    marginTop: 30,
    backgroundColor: '#E2E7F0',
    height: '60%'
  },
  list: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  transactionItemContainer: {
    backgroundColor: '#e6e6e5',
    borderRadius: 5,
    marginBottom: 10,
    padding: 5
  },  
  transactionItem: {
    flexDirection: 'row', 
    justifyContent: 'space-between',

  }
  
})
