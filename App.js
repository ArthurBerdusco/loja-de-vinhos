import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Review from './src/screens/Review';
import Cart from './src/screens/Cart';
import Checkout from './src/screens/Checkout';
import NotificationButton from './src/components/NotificationButton';


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

        <Stack.Screen name="Notifications" component={Notifications} options={{
          headerRight: null
        }} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
