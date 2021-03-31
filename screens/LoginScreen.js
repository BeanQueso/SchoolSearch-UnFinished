import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import {Icon, Header} from 'react-native-elements'
import db from '../config'
export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            fullName:'',
            email:'',
            password:'',
            region:'',
            confirmPassword:'',
        }
    }

    userSignUp = (email, password, confirmPassword)=>{
        if(password!==confirmPassword){
            return alert("Password does not match. Check your password")
        }else{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            db.collection('users').add({
                full_name:this.state.fullName,
                email:this.state.email,
                password:this.state.password
            })
            return alert("User added successfully, you can login now.",
            '',
            [{text:'ok'}]
            )
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return alert(errorMessage)
        })
    }
    }

    userLogin = (email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            this.props.navigation.navigate('WelcomeScreen')
        }).catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return alert(errorMessage)
        })

        
    }

    render(){
        return(
            <View style = {{flex:1, alignItems:'center', backgroundColor:'#87ceeb'}}>
                <View style = {{backgroundColor:'navy', width:1366, alignItems:'center'}}>
                <Text style = {{fontSize:35, color:'aqua'}}>
                    School Search
                </Text>
                </View>
                <View>
                    <Image 
                source = {require('../pics/SchoolSearchPicture.jpeg')}
                style = {{width:420, height:300, margin:30}}
                />
                </View>
                
                <Text style = {{
                    fontSize:16
                }}>
                    Full Name -- Needed for signing up.
                </Text>

                <TextInput
                style = {{width:220, height:25, borderWidth:1, borderColor:'navy', margin:15, borderWidth:2, borderRadius:15}}
                placeholder = "Full Name"
                maxLength = {30}
                onChangeText = {(text)=>{
                    this.setState({
                        fullName:text
                    })
                }}
                />

                <Text style ={{
                    fontSize:16
                }}>
                    Email Address
                </Text>

<TextInput
                style = {{width:220, height:25, borderWidth:1, borderColor:'navy', margin:20, borderWidth:2, borderRadius:15}}
                placeholder = "abc@example.com"
                maxLength = {30}
                keyboardType = "email-address"
                onChangeText = {(text)=>{
                    this.setState({
                        email:text
                    })
                }}
                />

                <Text style = {{
                    fontSize:16
                }}>
                    Password
                </Text>

<TextInput
                style = {{width:220, height:25, borderWidth:1, borderColor:'navy', margin:20, borderWidth:2, borderRadius:15}}
                placeholder = "Password"
                maxLength = {30}
                secureTextEntry = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        password:text
                    })
                }}
                />

                <Text style = {{
                    fontSize:16
                }}>
                Confirm Your Password -- Needed for signing up.
                </Text>

<TextInput
                style = {{width:220, height:25, borderWidth:1, borderColor:'navy', margin:20, borderWidth:2, borderRadius:15}}
                placeholder = "Confirm Password"
                maxLength = {30}
                secureTextEntry = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        confirmPassword:text
                    })
                }}
                />
                <View
                style = {{
                    flexDirection:'row'
                }}
                >
                <View
                style = {{
                    marginRight:5
                }}
                >
                <TouchableOpacity
                onPress = {()=>{
                    this.userLogin(this.state.email, this.state.password)
                }}
                style = {{
                    width:60,
                    height:30,
                    borderWidth:3,
                    borderColor:'aqua',
                    alignItems:'center',
                    borderRadius:5,
                    backgroundColor:'navy'
                }}
                >
                    <Text style = {{fontSize:15, fontFamily:'cursive', color:'aqua'}}>
                        Login
                    </Text>

                </TouchableOpacity>

                </View>
                <View
                style = {{
                    marginLeft:5,
                }}
                >

                <TouchableOpacity
                onPress = {()=>{
                    this.userSignUp(this.state.email, this.state.password, this.state.confirmPassword)
                }}
                style = {{
                    width:60,
                    height:30,
                    borderWidth:3,
                    borderColor:'aqua',
                    alignItems:'center',
                    borderRadius:5,
                    backgroundColor:'navy'
                }}
                >
                    <Text style = {{fontSize:15, fontFamily:'cursive', color:'aqua'}}>
                        Sign Up
                    </Text>

                </TouchableOpacity>
                </View>
                </View>
                
            </View>
        )
    }
}