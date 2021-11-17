import React, {useState, useEffect} from 'react'
import {Input} from 'react-native-elements'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Signup =({navigation})=>{

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setUsername] = useState("")
    const[fullName,setFullName] =useState("")
    
    return(
            <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={{fontSize: 30, fontFamily:'Times New Roman', marginBottom: 20, marginTop: 40}}>SignUp</Text>
                </View>
            <View style={styles.form} >
                <Input
               placeholder="Fullname"
               label="Full Name"
               inputContainerStyle={{borderBottomWidth:0}}
               value={fullName}
               style={styles.field}
               editable={false} 
               textContentType="name"
               onChangeText={()=>setFullName()}/>

               <Input
               placeholder="Username"
               label="Username"
               inputContainerStyle={{borderBottomWidth:0}}
               value={username}
               style={styles.field}
               editable={false} 
               textContentType="username"
               onChangeText={()=>setUsername()}/>

            <Input
               placeholder="Email"
               label="Email"
               inputContainerStyle={{borderBottomWidth:0}}
               value={email}
               style={styles.field} 
               textContentType= "emailAddress"
               onChangeText={()=>setEmail()}/>

            <Input
               placeholder="Phone"
               label="Phone"
               inputContainerStyle={{borderBottomWidth:0}}
               value={phone}
               style={styles.field} 
               textContentType= "telephoneNumber"
               onChangeText={()=>setPhone()}/>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.signup} onPress={()=>navigation.navigate("HomeScreen")}>
                    <Text style= {styles.signupText}>Signup</Text>
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        </View>
    )
   
}
export default Signup

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        marginTop: 30,
    },
   form:{
       paddingTop: 20,
       borderWidth: 3,
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
       borderBottomWidth: 0,
       borderColor: '#7a42f4'
   },
    field:{
        margin: 15,
        height: 45,
        width: 300,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10
    },
    signup:{
        backgroundColor: 'orange',
        width: 150,
        borderRadius: 20,
    },
    signupText:{
        fontSize: 20,
        fontFamily: "Times New Roman",
        padding: 6,
        textAlign: 'center',
        color: 'white'
    }
})