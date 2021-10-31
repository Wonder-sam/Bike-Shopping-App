import React, {useState} from 'react'
import {Input} from 'react-native-elements'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Order =({navigation})=>{

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [card, setCard] = useState("")
    return(
            <View style={styles.container}>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20, justifyContent: "space-between", alignItems: "center"}}>
			        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
				        <TouchableOpacity onPress={()=>navigation.goBack()}>
				        	<AntDesign name="arrowleft" size={24} color="black" />
			        	</TouchableOpacity>
			        </View>
			        <View>
				        <Text style={{fontSize: 16, fontWeight: "bold"}}>Order</Text>
			        </View>
			        <Text>    </Text>
	    	</View>
            <ScrollView>
               <Input
               placeholder="Username"
               label="Username"
               inputContainerStyle={{borderBottomWidth:0}}
               value="name"
               style={styles.field}
               editable={false} 
               textContentType="username"/>

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

            <Input
               placeholder="Card Number"
               label="Card Number"
               inputContainerStyle={{borderBottomWidth:0}}
               value={card}
               style={styles.field} 
               onChangeText={()=>setCard()}
               textContentType= "creditCardNumber"/>
            </ScrollView>

        </View>
    )
   
}

export default Order

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        marginTop: 30,
        paddingHorizontal: 20,
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
})