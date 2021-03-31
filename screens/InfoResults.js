import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import {Icon, Header} from 'react-native-elements'
import db from '../config'
export default class InfoResults extends React.Component{

    returnToWelcomeScreen = ()=>{
        this.props.navigation.navigate('WelcomeScreen')
    }

    render(){
        return(
            <View style = {{
                flex:1,
                backgroundColor:'#87ceeb'
            }}>
                <View style = {{backgroundColor:'navy', width:1366, alignItems:'center'}}>
                <Text style = {{fontSize:35, color:'aqua'}}>
                    School Search
                </Text>
                </View>
                <View style = {{
                    alignItems:'center',
                    marginTop:30,
                    flexDirection:'row'
                }}>
                    <View>
                    <TouchableOpacity style = {{
                        width:140,
                        height:40,
                        borderWidth:2,
                        borderColor:'navy',
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:20,
                        backgroundColor:'navy',
                        marginLeft:40
                    }}
                    onPress = {()=>{
                        this.returnToWelcomeScreen()
                    }}
                    >
                        <Text style = {{
                            color:'aqua',
                            alignSelf:'center',
                            marginLeft:12
                        }}>
                            Return to previous page
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View style = {{
                        marginLeft:469.5
                    }}>
                    <Text style = {{
                        fontSize:25
                    }}>
                        Results
                    </Text>
                    </View>
                </View>
                <View style = {{
                    alignItems:'center'
                }}>
                    <Text>
                        Schools your child can apply to:
                    </Text>
                </View>
            </View>
        )
    }
}