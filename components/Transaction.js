import { Text, View, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function Transaction({item}) {
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
}


const styles = StyleSheet.create({
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