import  React from 'react'
import {TouchableOpacity,View, StyleSheet, Text, Image, ScrollView} from 'react-native'
import {Ionicons, FontAwesome, AntDesign, EvilIcons} from '@expo/vector-icons'
import Cart from './Cart.js'
import ProductData from './ProductData.js'


function Home(){
	return(
		<View style={styles.container}>
			<View style={styles.topBar}>
				<Ionicons name="ios-menu-outline" size={24} color = 'black' />
				<FontAwesome name="motorcycle" size ={24} color="black" />
				<View style={styles.right}>
					<TouchableOpacity><AntDesign name= "search1" size={20} color = "black" /></TouchableOpacity>
					<TouchableOpacity><Ionicons name="notifications-outline" size ={20} color = "black" /></TouchableOpacity>
				</View>
			</View>
			<View style={{flexDirection: "row", alignItems: "center", marginBottom: 5, marginTop: 5}}>
				<Text style={styles.title1}>{ProductData.title1}</Text>
				<Text style={styles.title2}>{ProductData.title2}</Text>
			</View>
			<Text style={{fontWeight: "bold", fontSize: 16, marginBottom: 10}}>Categories</Text>
			<View style={{justifyContent: "space-between"}}>
				<ScrollView horizontal={true}>
					{
						ProductData.tabs.map((item,index)=>(
							<View key={item.id} style={styles.tab}>
								<TouchableOpacity><Text>{item.tab}</Text></TouchableOpacity>
							</View>)
						)
					}
				</ScrollView>
			</View>
			<View style={styles.content}>
				<ScrollView>
					<View style={styles.inside}>
					{
						ProductData.products.map((item, index)=>(
							<View key = {item.id} style={styles.product}>
								<View style = {styles.heart}>
									<EvilIcons name="heart" size={24} color="black" />
								</View>
								<Image source={item.image} style={styles.images}/>
								<Text style={styles.txt}>{item.name}</Text>
								<Text style={styles.price}>{item.price}</Text>
							</View>)
						)
					}
					</View>
				</ScrollView>
			</View>
		</View>
	)
}
export default Home

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		paddingTop: 30,
		paddingHorizontal: 20,
	},
	topBar:{
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	right:{
		flexDirection: "row",
		justifyContent: "space-between"
	},
	title1:{
		fontSize: 14,
		color: "grey"
	},
	title2:{
		fontSize: 20,
		color: "orange",
		fontWeight: "bold"
	},
	tab:{
		backgroundColor: "#eeedf2",
		padding: 7,
		paddingLeft: 12,
		paddingRight: 12,
		color: "grey",
		fontSize: 16,
		borderRadius: 5,
		marginRight: 15,
		marginBottom: 5
	},
	product:{
		backgroundColor: "#eeedf2",
		width: 150,
		height: 230,
		marginBottom: 20,
		flexDirection: "column",
		alignItems: "center",
		borderRadius: 10,
		paddingTop: 15,
		paddingBottom: 10
	},
	heart:{
		position: "relative",
		left: 50,
		backgroundColor: "white",
		borderRadius: 15,
		padding: 5,
		paddingTop: 6,
		paddingBottom: 6
	},
	images:{
		width: 130,
		height: 200,
		flex: 1,
	},
	txt:{
		fontSize: 14, 
		color: "grey",
	},
	price:{
		fontSize: 17, 
		color: "black",
		fontWeight: "bold"
	},
	content: {
		flex: 1,
	},
	inside:{
		flexDirection: "row",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
		paddingTop: 15,
	}
});