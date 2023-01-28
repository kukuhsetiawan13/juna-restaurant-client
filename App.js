import 'react-native-gesture-handler';
import RootNavigator from './navigators/RootNavigator';
import {Provider} from 'react-redux';
import {store} from './store'



export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

