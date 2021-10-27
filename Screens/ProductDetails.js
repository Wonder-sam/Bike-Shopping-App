import React from 'react'
import {View,Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import{AntDesign} from '@expo/vector-icons'

function ProductDetails({navigation, route}){
    const {id, name, image, price, type} = route.params.data;

        return(
            <View style={styles.container}>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20, justifyContent: "space-between", alignItems: "center"}}>
			        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
			    	    <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
			        </View>
			    <View>
				    <Text style={{fontSize: 16, fontWeight: "bold"}}>Product</Text>
		    	</View>
		    	<Text>    </Text>
		        </View>

                <View style={styles.product}>
                    <View style ={styles.image}><Image source={image} /></View>
                    <View style={styles.details}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 16, color:'grey'}}>Name: </Text>
                            <Text style={styles.detail}>{name}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 16, color:'grey'}}>Type: </Text>
                            <Text style={styles.detail}>{type}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 16, color:'grey'}}>Cost: </Text>
                            <Text style={styles.detail}>{price}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
   
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 50,
		paddingHorizontal: 20,
    },
    product:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        backgroundColor: '#eeedf2',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: -5
    },
    details: {
        justifyContent: 'space-evenly',
        marginLeft: 10,
        height: 150
    },
    detail: {
        fontSize: 16
    }
})
export default ProductDetails