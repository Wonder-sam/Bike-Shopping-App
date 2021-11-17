import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from './Screens/Welcome.js'
import HomeScreen from './Screens/MyTabs.js'
import Login from './Screens/Login.js'
import Signup from './Screens/Signup.js'

const Stack = createNativeStackNavigator();
export default function App() {
	return (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="SignUp" component={Signup} />
			<Stack.Screen name="HomeScreen" component={HomeScreen} options={{gestureEnabled: false}}/>
		</Stack.Navigator>
	</NavigationContainer>
  );
}

