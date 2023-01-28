import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardTab from './navigators/DashboardTab';
import MenuTab from './navigators/MenuTab';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardTab} />
        <Stack.Screen name="MenuTab" component={MenuTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

