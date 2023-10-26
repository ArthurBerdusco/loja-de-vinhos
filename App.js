import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Review from './src/screens/Review';
import Cart from './src/screens/Cart';
import Payment from './src/screens/Payment';
import NotificationButton from './src/components/NotificationButton';
import Search from './src/screens/Search';
import SearchButton from './src/components/SearchButton';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Notification1 from './src/components/notifications/Notification1';
import Orders from './src/screens/Orders';
import OrderDetail from './src/screens/OrderDetail';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#7E3030',
          },
          headerRight: () => (
<<<<<<< HEAD
            <>
              <SearchButton navigation={useNavigation()}/>
              <NotificationButton navigation={useNavigation()} />         
            </>
=======
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <NotificationButton navigation={useNavigation()} />
            </View>
>>>>>>> 1199ca2271688f8092abf856c9a4aea0448af068
          ),
        }}
      >


        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerTitle: '', // Remover o título padrão
            header: () => (
              <SafeAreaView style={{backgroundColor: '#7E3030'}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#7E3030', justifyContent: 'space-around', height: 63 }}>
                  <SearchButton navigation={useNavigation()} />
                  <NotificationButton navigation={useNavigation()} />
                </View>
              </SafeAreaView>
            ),
          })}
        />

        <Stack.Screen name="Review" component={Review} options={{ headerTitle: 'Informações' }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerTitle: 'Carrinho' }} />
        <Stack.Screen name="Payment" component={Payment} options={{ headerTitle: 'Pagamento' }} />
        <Stack.Screen name="Orders" component={Orders} options={{ headerTitle: 'Pedidos' }} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ headerTitle: 'Detalhe do pedido' }} />
        

        <Stack.Screen name="Notifications" component={Notifications} options={{ headerRight: null, headerTitle: 'Notificações' }} />

        <Stack.Screen name="Notification1" component={Notification1} options={{ headerTitle: 'Notificação 1' }} />

        <Stack.Screen name="Search" component={Search} options={{ headerTitle: 'Buscar' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
