import { Text, View, FlatList, StyleSheet, ImageBackground } from 'react-native';

export default function Coupon({item}) {
  return (
    <ImageBackground source={{uri: item.backgroundImage}} resizeMode="cover" style={styles.image}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '70%', paddingHorizontal: 10}}>
          <Text style={{color: 'white', backgroundColor: '#e6ac00', marginBottom: 5, fontSize: 12, fontWeight: 'bold'}}>Coupon</Text>
          <Text style={{color: 'white', backgroundColor: '#e6ac00', marginBottom: 5, fontSize: 12, fontWeight: 'bold', marginLeft: 50}}>{item.name}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '70%', paddingHorizontal: 10}}>
          <Text style={{color: 'white', backgroundColor: '#e6ac00', marginBottom: 5, fontSize: 12, fontWeight: 'bold'}}>Minimum Purchase</Text>
          <Text style={{color: 'white', backgroundColor: '#e6ac00', marginBottom: 5, fontSize: 12, fontWeight: 'bold', marginLeft: 50}}>$ {item.minimumPurchase}</Text>
        </View>
        {
        item.type === 'discount'
        ?
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '70%', paddingHorizontal: 10}}>
            <Text style={{color: 'white', backgroundColor: '#e6ac00', marginBottom: 5, fontSize: 12, fontWeight: 'bold'}}>Discount</Text>
            <Text style={{color: 'white', backgroundColor: '#e6ac00', marginBottom: 5, fontSize: 12, fontWeight: 'bold', marginLeft: 50}}>$ {item.discount}</Text>
        </View>
        :
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '70%', paddingHorizontal: 10}}>
            <Text style={{color: 'white', backgroundColor: '#e6ac00', marginBottom: 5, fontSize: 12, fontWeight: 'bold'}}>Free Item</Text>
            <Text style={{color: 'white', backgroundColor: '#e6ac00', marginBottom: 5, fontSize: 12, fontWeight: 'bold', marginLeft: 50}}>{item.freeItem}</Text>
        </View>
        }
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image: {
      justifyContent: 'center',
      height: 100,
      borderRadius: 5,
      marginVertical: 10
    },
    
  })
