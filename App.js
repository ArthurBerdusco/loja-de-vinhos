import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Review from './src/screens/Review';
import Cart from './src/screens/Cart';
import Checkout from './src/screens/Checkout';
<<<<<<< HEAD
import PaymentScreen from './src/screens/PaymentScreen';
=======
import NotificationButton from './src/components/NotificationButton';
>>>>>>> 391eeb20a53b2d8cf05bafe97383cf3e2a2123e6


const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator

        initialRouteName='Home' screenOptions={{
          headerRight: () => <NotificationButton
            notifications={3}
            navigation={useNavigation()} />
        }}

      >

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Review" component={Review} />

        <Stack.Screen name="Cart" component={Cart} />

        <Stack.Screen name="Checkout" component={Checkout} />

<<<<<<< HEAD
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
=======
        <Stack.Screen name="Notifications" component={Notifications} options={{
          headerRight: null
        }} />
>>>>>>> 391eeb20a53b2d8cf05bafe97383cf3e2a2123e6

      </Stack.Navigator>

    </NavigationContainer>

  );
}
