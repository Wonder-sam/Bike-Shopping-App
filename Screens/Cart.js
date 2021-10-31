import React, {useState, useEffect} from 'react'
import {TouchableOpacity,Text, View, Image, StyleSheet, ScrollView} from 'react-native'
import{AntDesign} from '@expo/vector-icons'
import ProductData from './ProductData.js'


function Cart({navigation}){
	const [remove, setRemove] = useState(0);
	const [activity, setActivity] = useState(0);
	const removeCartItem=(item)=>{
		ProductData.cart.splice(ProductData.cart.indexOf(item),1);
		setRemove(remove +1)
	}
	const dec=(data) =>{
		let pos = ProductData.cart.indexOf(data)
		if(ProductData.cart[pos].quantity >1){
			ProductData.cart[pos].quantity -= 1
			ProductData.cart[pos].price -= ProductData.products[pos].price
		} 
		setActivity(activity+1)
	}
	const inc=(data) =>{
		let pos = ProductData.cart.indexOf(data)
		ProductData.cart[pos].quantity += 1
		ProductData.cart[pos].price += ProductData.products[pos].price
		setActivity(activity+1)
	}
	const total =()=>{
		let totalPrice =0
		for(let i=0; i<ProductData.cart.length; i++){
			totalPrice += ProductData.cart[i].price
		}
		return totalPrice
	};

	let totalPrice = total()
	
	useEffect(()=>{
		navigation.addListener("focus",()=>{
			setActivity(activity+1)
		})
	},[{navigation}])
		
	return(
		<View style={styles.container}>
		<View style={{flexDirection: "row", alignItems: "center", marginBottom: 20, justifyContent: "space-between", alignItems: "center"}}>
			<View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
				<TouchableOpacity onPress={()=>navigation.goBack()}>
					<AntDesign name="arrowleft" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<View>
				<Text style={{fontSize: 16, fontWeight: "bold"}}>Cart List</Text>
				<Text style={{color: "grey"}}>({ProductData.cart.length} items)</Text>
			</View>
			<Text>    </Text>
		</View>
		<ScrollView>
		{
			ProductData.cart.map((item,index)=>(
				<View key={item.id} style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
					<View style={{flexDirection: "row", height: 120}}>
						<Image source={item.image} style={styles.images}/>
						<View style={styles.info}>
							<Text>{item.name}</Text>
							<Text style={{color: 'grey', fontSize: 10, fontWeight: "bold"}}>Mountain Bike</Text>
							<Text style={{fontWeight: 'bold', fontSize: 16}}>{item.price}</Text>
						</View>
					</View>
					<View style={{justifyContent: "space-between", height: 100, paddingTop: 10, alignItems: "flex-end"}}>
						<TouchableOpacity onPress={()=>removeCartItem(item)}>
							<AntDesign name="delete" size={18} color="orange" />
						</TouchableOpacity>
						<View style={{flexDirection: "row", alignItems: "center"}}>
							<TouchableOpacity style ={styles.sub} onPress ={()=>dec(item)}>
								<Text style={{color: "white", fontWeight: "bold"}}>-</Text>
							</TouchableOpacity>
							<View style={styles.num}><Text style={{color: "black", fontSize: 20}}>{item.quantity}</Text></View>
							<TouchableOpacity style={styles.add} onPress ={()=>inc(item)}>
								<Text style={{color: "white", fontWeight: "bold"}}>+</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>)
			)
		}
		<View>
			<View style = {styles.total}>
				<Text>Total: {totalPrice}</Text>
			</View>
			<TouchableOpacity onPress={()=>navigation.navigate("Order")} style={styles.order}>
				<Text style={{fontWeight: "bold", fontSize: 18, color: 'white'}}>Place Order</Text>
			</TouchableOpacity>
		</View>
		</ScrollView>
		</View>
	)
}

export default Cart

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
	},
	info:{
		justifyContent: "space-between",
		paddingTop: 10,
		height: 90
	},
	images:{
		height: 110,
		width: 150,
		backgroundColor: "#eeedf2",
		borderRadius: 10,
		transform:[{scale:0.8}],
		marginTop: -5
	},
	sub:{
		padding: 5, 
		paddingLeft: 11,
		paddingRight: 11, 
		backgroundColor: "black", 
		borderRadius: 30, 
		justifyContent: "center",
		height: 30
	},
	add:{
		padding: 5, 
		paddingLeft: 11,
		paddingRight: 11, 
		backgroundColor: "orange", 
		borderRadius: 30, 
		justifyContent: "center",
		height: 30
	},
	num:{
		padding: 10, 
		borderRadius: 20,
		justifyContent: "center",
	},
	total:{
		padding: 10,
		marginLeft: 230,
		backgroundColor: "orange",
		alignItems: "flex-end",
		marginBottom: 5
	},
	order:{
		padding: 10,
		backgroundColor: "orange",
		alignItems: "center",
		borderRadius: 10,
	}
})