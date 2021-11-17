import React from 'react'
import {TouchableOpacity,View, Text, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Settings=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20, justifyContent: "space-between", alignItems: "center"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{fontSize: 16, fontWeight: "bold"}}>Settings</Text>
                </View>
                <Text>    </Text>
            </View>
            <View>
				<TouchableOpacity
					onPress={()=>navigation.navigate("Welcome")}
					style={styles.logout} >
					<Text style={styles.text}>Logout</Text>
				</TouchableOpacity>
			</View>
        </View>
        )

}
export default Settings

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 20,
    },
    logout:{
		padding: 15,
		marginTop: 10,
		borderRadius: 10,
		backgroundColor: "orange",
		width: 200,
    },
    text:{
		color: "black",
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
	},
});