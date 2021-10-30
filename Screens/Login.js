import React, {useState, useRef} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, Keyboard} from 'react-native'
import {Input} from 'react-native-elements'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const Login=({navigation})=>{

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const passwordRef = useRef();
    const usernameHandler=(txt)=>{
        setUsername(txt)
    }
    const passwordHandler=(txt)=>{
        setPassword(txt)
    }
    return(
        <View onStartShouldSetResponder={()=>Keyboard.dismiss()}>
        <ImageBackground source={require("../Images/topimg.jpg")}
        resizeMode="cover"
        style ={styles.topImage}>
        <View style ={styles.container}>
            <Text style={{fontWeight: "bold", fontSize: 20}}>Login</Text>
            <Input
            containerStyle={styles.field}
            placeholder =" Username"
            value={username}
            leftIcon ={<FontAwesome5 name="user-alt" size={24} color="black" />}
            textContentType ={"username"}
            returnKeyType="next"
            onSubmitEditing={()=>passwordRef.current.focus()}
            onChangeText ={usernameHandler}
            />

             <Input
            placeholder =" Password"
            value={password}
            containerStyle={styles.field}
            leftIcon={<Ionicons name="key" size={24} color="black" />}
            secureTextEntry={true}
            textContentType ={"password"}
            ref ={passwordRef}
            returnKeyType="go"
            onSubmitEditing={()=>navigation.navigate("HomeScreen")}
            onChangeText ={passwordHandler}
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