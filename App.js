import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Notification from './src/screens/Notification';
import Review from './src/screens/Review';
import Cart from './src/screens/Cart';
import Checkout from './src/screens/Checkout';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Review" component={Review} />

        <Stack.Screen name="Notification" component={Notification} />

        <Stack.Screen name="Cart" component={Cart} />

        <Stack.Screen name="Checkout" component={Checkout} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
