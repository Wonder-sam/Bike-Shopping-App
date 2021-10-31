import  React, {useState, useEffect} from 'react'
import {TouchableOpacity,View, StyleSheet, Text, Image, ScrollView,Keyboard,Dimensions} from 'react-native'
import {Ionicons, FontAwesome, AntDesign, EvilIcons} from '@expo/vector-icons'
import {SearchBar} from 'react-native-elements'
import ProductData from './ProductData.js'

const Home=({navigation})=>{
	const [hTab, setHtab] = useState("All")
	const [search, setSearch] = useState(false)
	const [searchKey, setSearchKey] = useState("")
	const [load, setLoad] = useState(false)
	const [added, setAdded] = useState(0)

	const filter =(txt)=>{
		setSearchKey(txt);
		setLoad(!load)
	}
	const switchTab=(tab)=>{
		setHtab(tab)
	}
	const addToCart=(data)=>{
		for(let i=0; i<ProductData.cart.length;i++){
			if(ProductData.cart[i].id == data.id){
				alert("item already in cart")
				return
			}	
		} 
		ProductData.cart.unshift(data)
		ProductData.cart[0].quantity =1
		alert("item successfully added to cart")
		setAdded(added + 1)
	}

	useEffect(()=>{
		navigation.addListener("focus",()=>{
			setAdded(added + 0)
		})
	},[{navigation}])

	return(
		<View style={styles.container} onStartShouldSetResponder={()=>Keyboard.dismiss()}>			
			<View >
			{
				search == false ?
				<View style={styles.topBar}>
					<Ionicons name="ios-menu-outline" size={24} color = 'black' />
					<FontAwesome name="motorcycle" size ={24} color="black" />
					<View style={styles.right}>
						<TouchableOpacity onPress={()=>setSearch(true)}>
							<AntDesign name= "search1" size={20} color = "black" />
						</TouchableOpacity>
						<TouchableOpacity>
							<Ionicons name="notifications-outline" size ={20} color = "black" />
						</TouchableOpacity>
					</View>
				</View>
					:
						<SearchBar containerStyle ={styles.searchbar}
						inputContainerStyle ={styles.searchbarInput}
						inputStyle={{color: "white"}}
						platform="ios"
						lightTheme
						round
						showCancel={search}
						placeholder ="Type here"
						onChangeText ={filter}
						showLoading={load}
						value = {searchKey}
						onCancel ={()=>setSearch(false)} />
			}
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
								<TouchableOpacity onPress={()=>switchTab(item.tab)}><Text>{item.tab}</Text></TouchableOpacity>
							</View>)
						)
					}
				</ScrollView>
			</View>
			<View style={styles.content}>
				<ScrollView>
					<View style={styles.products}>
					{
						ProductData.products.map((item, index)=>(
								hTab== "All"?
									<TouchableOpacity key = {item.id} style={styles.product} onPress={()=>navigation.navigate("ProductDetails",{data:item})}>
										<View style = {styles.heart}>
											<EvilIcons name="heart" size={24} color="black" />
										</View>
										<Image source={item.image} style={styles.images}/>
										<Text style={styles.txt}>{item.name}</Text>
										<Text style={styles.price}>{item.price}</Text>
										<TouchableOpacity style={styles.btn} onPress={()=>addToCart(item)}>
											<Text style={{fontSize: 12}}>Add to Cart</Text>
										</TouchableOpacity>
									</TouchableOpacity> :
										item.type == hTab ? 
											<TouchableOpacity key = {item.id} style={styles.product} onPress={()=>navigation.navigate("ProductDetails",{data:item})}>
												<View style = {styles.heart}>
													<EvilIcons name="heart" size={24} color="black" />
												</View>
												<Image source={item.image} style={styles.images}/>
												<Text style={styles.txt}>{item.name}</Text>
												<Text style={styles.price}>{item.price}</Text>
												<TouchableOpacity style={styles.btn} onPress={()=>addToCart(item)}>
													<Text style={{fontSize: 15}}>Add to Cart</Text>
												</TouchableOpacity>
											</TouchableOpacity> : null
							)
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
		alignItems: "center",
		backgroundColor: "#eeedf2",
		marginLeft: -17,
		padding: 10,
		width: Dimensions.get("screen").width
	},
	right:{
		flexDirection: "row",
		justifyContent: "space-between"
	},
	searchbar:{
		width: 300,
		height: 5,
		backgroundColor: 'white',
		borderStyle: 'dotted',
	},
	searchbarInput:{
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
		paddingTop: 5,
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
		marginLeft: -20
	},
	products:{
		flexDirection: "row",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
		paddingTop: 10,
	},
	btn:{
        backgroundColor: 'orange',
        padding: 10,
        height: 30,
        width: 100,
        borderRadius: 10,
		marginTop: 3,
        justifyContent: "center",
        alignItems: "center",
        
    }
});