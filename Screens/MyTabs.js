import  React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View,StyleSheet, BackHandler} from 'react-native'
import{FontAwesome} from '@expo/vector-icons'
import Cart from './Cart.js'
import Home from './Home.js'
import ProductData from './ProductData.js'
import ProductDetails from './ProductDetails.js'
import Order from './Order.js'

const Tab = createBottomTabNavigator();
const tabs=({route})=>({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: 'orange',
				tabBarInactiveTintColor: 'black',
				tabBarStyle:{backgroundColor: "#eeedf2"},
				tabBarIcon:({color, size})=>{
				let iconName;
				let stylepick;
				if(route.name=="Home"){
					iconName="home"
					color="black"
					size=24
				}
				else if(route.name=="Cart"){
					iconName="shopping-cart"
					color="black"
					size=24
				}
				// else if (route.name=="Mic"){
				// 	iconName="microphone"
				// 	color="white"
				// 	size=18
				// 	stylepick = styles.bottomMidTab
				// }
				return <View><FontAwesome name={iconName} size={size} color={color} /></View>
			}
			})
// const micTab=()=>({
// 	tabBarItemStyle:{
// 		backgroundColor: "white", 
// 		borderRadius: 900, 
// 		bottom: 30,  
// 		marginLeft: 100, 
// 		marginRight: 100, 
// 		paddingTop: 10, 
// 		paddingBottom: 10, 
// 		marginTop: -5, 
// 		marginBottom: -5
// 		}
// 	})
	const pdTab=()=>({
		tabBarItemStyle:{
			display: "none"
			}
		})
	const handleBackButton=()=>{
		BackHandler.exitApp();
		return true;
	}
function HomeScreen(){
	return(
		<Tab.Navigator initialRouteName="Home" backBehavior="history" 
			screenOptions={tabs}>
			<Tab.Screen name="Home" component={Home} />
			{/* <Tab.Screen name="Mic" component={Home} options={micTab}/> */}
			<Tab.Screen name="Cart" component={Cart}  options={{tabBarBadge: ProductData.cart.length}}/>
			 <Tab.Screen name="ProductDetails" component={ProductDetails} options={pdTab} />
			 <Tab.Screen name="Order" component={Order} options={pdTab} />
			 {/* <Tab.Screen name="CheckOut" component={Checkout} options={pdTab} /> */}
		</Tab.Navigator>
		)
}
export default HomeScreen
// const styles = StyleSheet.create({
// 	bottomMidTab:{
// 		backgroundColor: "black", 
// 		borderRadius: 100,
// 		paddingLeft: 17,
// 		paddingRight: 17,
// 		paddingTop: 11,
// 		paddingBottom: 11,
// 		height: 45,
// 		justifyContent: "center"
// 	},
// 	bottomTabs:{
// 	}
// })
