import React, {useEffect} from 'react'
import { Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function MenuTabNavigator({navigation}) {

  const isFocused = useIsFocused();
  
  useEffect(() => {
    if(isFocused) navigation.navigate('MenuTab')
  }, [isFocused])


  return (
    <View>
        <Text>MenuScreen</Text>
    </View>
  )
}
