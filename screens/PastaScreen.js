import React, { useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function PastaScreen() {

  const {pasta} = useSelector( (state) => state.FoodReducer)

  // useEffect(() => {
  //   console.log(pasta, "pasta di screen")
  // }, [pasta])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={pasta}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.card}
            >
              <View style={styles.cardFooter}></View>
              <Image style={styles.cardImage} source={{ uri: item.picture }} />
              <View style={styles.cardHeader}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={{ justifyContent: 'space-between'}}>
                  <View style={{ marginTop: 10 }}>
                    <Text style={styles.toppings}>{item.toppings}</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        {item.additionalInfos.includes("best-seller")
                          ? <Ionicons name={'thumbs-up'} size={10} color={'red'} style={{ marginRight: 2}} />
                          : null
                        }
                        {item.additionalInfos.includes("beef")
                          ? <MaterialCommunityIcons name="cow" size={12} color="red" style={{ marginRight: 2}} />
                          : null
                        }
                        {item.additionalInfos.includes("chicken")
                          ? <FontAwesome5 name="kiwi-bird" size={10} color="red" style={{ marginRight: 2}} />
                          : null
                        }
                        {item.additionalInfos.includes("spicy")
                          ? <MaterialCommunityIcons name="chili-mild" size={13} color="red" style={{ marginRight: 2}} />
                          : null
                        }
                        {item.additionalInfos.includes("vegetarian")
                          ? <FontAwesome5 name="leaf" size={10} color="green" style={{ marginRight: 2}} />
                          : null
                        }
                        {item.additionalInfos.includes("fish")
                          ? <FontAwesome5 name="fish" size={10} color="red" style={{ marginRight: 2}} />
                          : null
                        }
                      </View>
                      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.priceAndInfos}>${item.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
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
  /******** card **************/
  card: {
    shadowColor: '#404040',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    borderRadius: 10,
    elevation: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,

    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    width: 130,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: 'black',
  },
  toppings: {
    fontSize: 12,
    flex: 1,
    alignSelf: 'flex-start',
    color: '#696969',
  },
  priceAndInfos: {
    fontSize: 13,
    flex: 1,
    alignSelf: 'flex-start',
    color: '#1a1a1a',
  }

})
