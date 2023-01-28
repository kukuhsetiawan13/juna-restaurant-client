import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import DashboardTab from './DashboardTab';
import MenuTab from './MenuTab';
import { useEffect } from 'react';
import { fetchAllFood } from '../store/middlewares/thunk';


const Stack = createNativeStackNavigator();


export default function RootNavigator() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllFood())
    }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator
      
      >
        <Stack.Screen 
        name="Dashboard" 
        component={DashboardTab} 
        options={{
          headerTitle: () => (
            <Image 
              style={{ width: 100, height: 50 }} 
              source={require("../assets/junapizzacropped.png")}
              resizeMode='contain'
            />
          ),
          headerTitleAlign: 'center'
        }}
      />
        <Stack.Screen 
          name="MenuTab" 
          component={MenuTab}
          options={{
            headerTitle: () => (
              <Image 
                style={{ width: 100, height: 50 }} 
                source={require("../assets/junapizzacropped.png")}
                resizeMode='contain'
              />
            ),
            headerTitleAlign: 'center'
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
