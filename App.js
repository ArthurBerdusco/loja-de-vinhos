import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Review from './src/screens/Review';
import Cart from './src/screens/Cart';
import Search from './src/screens/Search';
import SearchButton from './src/components/SearchButton';
import NotificationButton from './src/components/NotificationButton';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Notification1 from './src/components/notifications/Notification1';
import Orders from './src/screens/Orders';
import OrderDetail from './src/screens/OrderDetail';
import Profile from './src/screens/Profile';
import PaymentScreen from './src/screens/Payment';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

function MainTabs() {

  const [cartLabel, setCartLabel] = useState(1);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: '',
          header: () => (
            <SafeAreaView style={{ backgroundColor: '#7E3030' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#7E3030', justifyContent: 'space-around', height: 63 }}>
                <SearchButton navigation={useNavigation()} />
                <NotificationButton navigation={useNavigation()} />
              </View>
            </SafeAreaView>
          ),
          tabBarIcon: ({ focused }) => <Icon name="home" size={26} color={focused ? '#7D1F1F' : '#cacaca'}/>
        }}
      />

      <Tab.Screen name={'Carrinho '} component={() => <Cart cartLabel={cartLabel} />} options={{
        tabBarIcon: ({ focused }) => <Icon name="shopping-cart" size={26} color={focused ? '#7D1F1F' : '#cacaca'} />,
      }} />
      <Tab.Screen name="Orders" component={Orders} options={{
        tabBarIcon: ({ focused }) => <Icon name="list-ul" size={26} color={focused ? '#7D1F1F' : '#cacaca'} />,
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => <Icon name="user-alt" size={26} color={focused ? '#7D1F1F' : '#cacaca'} />,
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
