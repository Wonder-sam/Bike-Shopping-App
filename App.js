import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './Screens/Login.js'
import HomeScreen from './Screens/MyTabs.js'
import ProductDetails from './Screens/ProductDetails.js';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="ProductDetails" component={ProductDetails} />
		</Stack.Navigator>
	</NavigationContainer>
  );
}

