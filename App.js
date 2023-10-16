import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Review from './src/screens/Review';
import Cart from './src/screens/Cart';
import Payment from './src/screens/Payment';
import NotificationButton from './src/components/NotificationButton';
import Search from './src/screens/Search';
import NotificationContent from './src/screens/NotificationContent';
import SearchButton from './src/components/SearchButton';

const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: 'center',

          headerRight: () => (
            <>
              <SearchButton navigation={useNavigation()}/>
              <NotificationButton navigation={useNavigation()} />              
            </>
          ),
        }}
      >

        <Stack.Screen name="Home" component={Home} options={{ headerTitle: 'Home' }} />
        <Stack.Screen name="Review" component={Review} options={{ headerTitle: 'Informações' }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerTitle: 'Carrinho' }} />
        <Stack.Screen name="Payment" component={Payment} options={{ headerTitle: 'Pagamento' }} />

        <Stack.Screen name="Notifications" component={Notifications} options={{ headerRight: null, headerTitle: 'Notificações' }} />
        <Stack.Screen name="NotificationContent" component={NotificationContent} options={{ headerRight: null, headerTitle: 'Notificação' }} />

        <Stack.Screen name="Search" component={Search} options={{ headerTitle: 'Buscar' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
