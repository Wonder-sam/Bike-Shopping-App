import  React from 'react'
import {View, StyleSheet,Text,TouchableOpacity, Image} from 'react-native'
import{AntDesign} from '@expo/vector-icons'

function Welcome({navigation}){
	return(
		<View style={styles.container}>
			<Image source={require("../Images/cover.jpg")} style={styles.image}/>
			<Text style={styles.welcome}>Welcome to</Text>
			<Text style={styles.bike}>Wonder Bikes</Text>
			<View>
				<TouchableOpacity
					onPress={()=>navigation.navigate("Login")}
					style={styles.gbtn} >
					<Image source={require("../Images/google.png")} style={{width: 25, height: 25}} />
					<Text style={styles.googleText} >Login with Google</Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity
					onPress={()=>navigation.navigate("Login")}
					style={styles.abtn} >
					<AntDesign name="apple1" size ={24} color="white" />
					<Text style={styles.appleText}>Login with Apple</Text>
				</TouchableOpacity>
			</View>
			<View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10}}>
				<Text>Don't have an account?</Text>
				<TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
					<Text style ={{color: "orange", fontSize: 16}}>Signup</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Welcome

const styles = StyleSheet.create({
	container:{
		backgroundColor: "white",
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	image:{
		transform:[{rotate: "45deg"}],
		borderRadius: 20,
		marginBottom: 60,
		width: 200,
		height: 200
	},
	welcome:{
		fontSize: 30, 
		color: "grey",
	},
	bike:{
		fontSize: 40, 
		fontWeight: "bold",
	},
	gbtn:{
		padding: 15,
		paddingHorizontal: 80,
		marginTop: 10,
		alignItems: "center",
		borderRadius: 10,
		flexDirection: "row",
		backgroundColor: "#eeedf2",
		width: 300,
	},
	abtn:{
		padding: 15,
		paddingHorizontal: 80,
		marginTop: 10,
		alignItems: "center",
		borderRadius: 10,
		flexDirection: "row",
		backgroundColor: "black",
		width: 300,
	},
	googleText:{
		paddingLeft: 10,
		color: "black"
	},
	appleText:{
		paddingLeft: 10,
		color: "white"
	}
});