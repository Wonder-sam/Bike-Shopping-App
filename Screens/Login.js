import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions} from 'react-native'
import {Input} from 'react-native-elements'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const Login=({navigation})=>{
    return(
        <View>
        <ImageBackground source={require("../Images/topimg.jpg")}
        resizeMode="cover"
        style ={styles.topImage}>
        <View style ={styles.container}>
            <Text style={{fontWeight: "bold", fontSize: 20}}>Login</Text>
            <Input
            containerStyle={styles.field}
            placeholder =" Username"
            leftIcon ={<FontAwesome5 name="user-alt" size={24} color="black" />}
            onChangeText ={()=>usernameHandler}
            />

             <Input
            placeholder =" Password"
            containerStyle={styles.field}
            leftIcon={<Ionicons name="key" size={24} color="black" />}
            onChangeText ={()=>usernameHandler}
            />
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("HomeScreen")}>
                <Text style={{color: "white"}}>Login</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    topImage:{
        height: Dimensions.get("screen").height
    },
    field:{
        margin: 15,
        height: 45,
        width: 300,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 10
    },
    btn:{
        backgroundColor: 'orange',
        padding: 10,
        margin: 15,
        height: 40,
        width: 200,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        
    }
})