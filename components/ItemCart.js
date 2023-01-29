import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, updateCartAdd, updateCartSubtract } from '../store/middlewares/thunk';
import { priceFloatFormatter } from '../utilities/priceAndCurrencyFormatter';

export default function ItemCart({item}) {

    const dispatch = useDispatch()
    
    const handleAddItem = (item) => {
        dispatch(updateCartAdd(item))
    }

    const handleSubtractItem = (item) => {
        dispatch(updateCartSubtract(item))
    }

    const handleRemoveItem = (item) => {
        dispatch(removeItemFromCart(item))
    }

  return (
    <View style={styles.itemsContainer}>
        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{fontWeight: 'bold'}}>$ {priceFloatFormatter(item.price * item.quantity)}</Text>
        </View>
        <View style={{ marginBottom: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image
                style={styles.itemImage}
                source={{
                uri: item.picture,
                }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
                <View
                style={styles.addOrSubtractButton}>
                    <TouchableOpacity onPress={() => handleSubtractItem(item)} style={{ width: 30}}>
                        <Text style={{textAlign: 'center'}}>&#x2212;</Text>
                    </TouchableOpacity>
                        <Text>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => handleAddItem(item)} style={{ width: 30}}>
                        <Text style={{textAlign: 'center'}}>&#x2b;</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => handleRemoveItem(item)} style={{height: '80%'}}>
                    <FontAwesome5 style={{ marginTop: 'auto', marginBottom: 'auto'}} name="trash" size={24} color="gray" />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    itemsContainer: {
      backgroundColor: 'white',
      marginTop: 3,
      paddingVertical: 10,
      paddingHorizontal: 15,
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
      paddingHorizontal: 5,
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    
    
  })
