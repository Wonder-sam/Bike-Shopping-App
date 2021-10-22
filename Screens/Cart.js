import React from 'react'
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native'
import{AntDesign} from '@expo/vector-icons'
import ProductData from './ProductData.js'

function Cart(){
	return(
		<View style={styles.container}>
		<View style={{flexDirection: "row", alignItems: "center", marginBottom: 20, justifyContent: "space-between", alignItems: "center"}}>
			<View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
				<AntDesign name="arrowleft" size={24} color="black" />
			</View>
			<View>
				<Text style={{fontSize: 16, fontWeight: "bold"}}>Cart List</Text>
				<Text style={{color: "grey"}}>(3 items)</Text>
			</View>
			<Text>    </Text>
		</View>
		<ScrollView>
		{
			ProductData.products.map((item,index)=>(
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
						<AntDesign name="delete" size={18} color="orange" />
						<View style={{flexDirection: "row", alignItems: "center"}}>
							<View style={styles.sub}><Text style={{color: "white", fontWeight: "bold"}}>-</Text></View>
							<View style={styles.num}><Text style={{color: "black", fontSize: 20}}>1</Text></View>
							<View style={styles.add}><Text style={{color: "white", fontWeight: "bold"}}>+</Text></View>
						</View>
					</View>
				</View>)
			)
		}
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
	}
})