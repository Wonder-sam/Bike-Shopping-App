import React, {useState, useEffect} from 'react'
import {Input} from 'react-native-elements'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import {Table, Row, Rows} from 'react-native-table-component'
import { AntDesign } from '@expo/vector-icons'
import ProductData from "./ProductData.js"

const Order =({navigation})=>{

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [card, setCard] = useState("")
    const[update,setUpdate] =useState(0)
    const table=[
    ];

	const firsupdatet=()=>{
        for(let i=0; i<ProductData.cart.length; i++){
            table.push([ProductData.cart[i].name,ProductData.cart[i].price,ProductData.cart[i].quantity,ProductData.cart[i].type]);
            }
        }
        firsupdatet()
        useEffect(()=>{
            navigation.addListener("focus",()=>{
                setUpdate(update+1)
            })
        },[{navigation}])
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
                <View>
                    <Text style={{fontSize: 20, fontFamily:'Times New Roman', marginBottom: 10}}>You have the following items in your Cart:</Text>
                </View>
                <View style={{marginBottom:20}}>
                <Table borderStyle={{borderWidth: 2, borderColor: 'orange'}}>
                    <Row data={["Item", "Price", "Quantity", "Type"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={table} textStyle={styles.text} />
                </Table>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontFamily:'Times New Roman', marginBottom: 20}}>
                        Fill the form below to place order:
                        </Text>
                </View>
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

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.order}>
                    <Text style= {styles.orderText}>Place Order</Text>
                </TouchableOpacity>
            </View>
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
    head: { 
        height: 40, 
        backgroundColor: 'orange' 
    },
    text: { 
      margin: 6 
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
    order:{
        backgroundColor: 'orange',
        width: 150,
        borderRadius: 20,
    },
    orderText:{
        fontSize: 20,
        fontFamily: "Times New Roman",
        padding: 6,
        textAlign: 'center',
        color: 'white'
    }
})