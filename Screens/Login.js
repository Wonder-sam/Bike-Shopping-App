import React from 'react'
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Login=()=>{
    return(
        <View style ={styles.container}> 
            <TextInput
            style={styles.field}
            placeholder =" Username"
            onChangeText ={()=>usernameHandler}
            />

             <TextInput
            placeholder =" Password"
            style={styles.field}
            onChangeText ={()=>usernameHandler}
            />
            <TouchableOpacity style={styles.btn}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
    },
    field:{
        margin: 15,
        height: 40,
        width: 300,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    btn:{
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        width: 200
    }
})