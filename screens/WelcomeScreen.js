import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import {Icon, Header} from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';

export default class WelcomeScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            studentName:'',
            sex:'',
            age:'',
            ageGroup:'',
            geography:'',
            countries:['uk']
        }
    }

    useInfoAndNavigate = ()=>{
        this.props.navigation.navigate('InfoResults')
    }

    render(){
        return(
            <View style = {{backgroundColor:'#87ceeb', alignItems:'center'}}>
                <View style = {{backgroundColor:'navy', width:1366, alignItems:'center'}}>
                <Text style = {{fontSize:35, color:'aqua'}}>
                    School Search
                </Text>
                </View>
                <View style = {{alignItems:'center', justifyContent:'center'}}>
                <Text style = {{fontSize:27, marginTop:40}}>
                   Welcome 
                </Text>
                <Text style = {{
                    marginTop:7
                }}>
                    Please Enter these Specifications
                </Text>
                </View>
                <View style = {{
                    borderWidth:'2',
                    borderColor:'navy',
                    alignItems:'center'
                }}>
                    <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20
                    }}>
                       Student's Full Name 
                    </Text>
                    <TextInput
                    style = {{margin:10, width:220, height:25, borderWidth:1, borderRadius:10, borderColor:'navy'}}
                    placeholder = ""
                    maxLength = {30}
                    keyboardType = {"default"}
                    onChangeText = {(text)=>{
                        this.setState({
                            studentName:text
                        })
                    }}
                    />

                    <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20
                    }}>
                       Student's Sex/Gender
                    </Text>
                    <TextInput
                    style = {{margin:10, width:220, height:25, borderWidth:1, borderRadius:10, borderColor:'navy'}}
                    placeholder = "  Male/Female/Prefer not to say"
                    maxLength = {30}
                    keyboardType = "default"
                    onChangeText = {(text)=>{
                        this.setState({
                            sex:text
                        })
                    }}
                    />

                    <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20
                    }}>
                       Student's Age
                    </Text>
                    <TextInput
                    style = {{margin:10, width:220, height:25, borderWidth:1, borderRadius:10, borderColor:'navy'}}
                    placeholder = ""
                    maxLength = {30}
                    keyboardType = "numeric"
                    onChangeText = {(text)=>{
                        this.setState({
                            age:text
                        })
                    }}
                    />

                    <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20
                    }}>
                       Student's Age Group
                    </Text>
                    <TextInput
                    style = {{margin:10, width:220, height:25, borderWidth:1, borderRadius:10, borderColor:'navy'}}
                    placeholder = "   KG/Primary/Middle/High"
                    maxLength = {30}
                    keyboardType = "default"
                    onChangeText = {(text)=>{
                        this.setState({
                            ageGroup:text
                        })
                    }}
                    />

                     <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20,
                        marginBottom:10
                    }}>
                       Geography
                    </Text>

<DropDownPicker
    items={[
        {label: 'North America', value: 'na', untouchable: true}, // North America
        {label: 'Canada', value: 'canada', parent: 'na', untouchable:false},        
        {label: 'Mexico', value: 'mexico', parent: 'na', untouchable:false},

        {label: 'Europe', value: 'eu', untouchable: true}, // Europe
        {label: 'UK', value: 'uk', parent: 'eu', untouchable:false},
        {label: 'Germany', value: 'germany', parent: 'eu', untouchable:false},
        {label: 'Russia', value: 'russia', parent: 'eu', untouchable:false},
        {label: 'France', value: 'fr', parent: 'eu', untouchable:false},
        {label: 'Spain', value: 'spn', parent: 'eu', untouchable:false},
        {label: 'Portugal', value: 'ptg', parent: 'eu', untouchable:false},
        {label: 'Italy', value: 'ity', parent: 'eu', untouchable:false},

        {label: 'Africa', value:'afr', untouchable:true}, //Africa
        {label: 'South Africa', value:'sa', parent:'afr', untouchable:false},
        {label: 'Nigera', value:'ng', parent:'afr', untouchable:false},
        {label: 'Egypt', value:'eg', parent:'afr', untouchable:false},
        {label: 'Zambia', value:'zmb', parent:'afr', untouchable:false},
        {label: 'Mozambique', value:'mz', parent:'afr', untouchable:false},
        {label: 'Etheopia', value:'eth', parent:'afr', untouchable:false},
        {label: 'Rwanda', value:'rw', parent:'afr', untouchable:false},

        {label: 'Asia', value:'asia', untouchable:true}, //Asia
        {label: 'India', value:'ind', parent:'asia', untouchable:false},
        {label: 'China', value:'cn', parent:'asia', untouchable:false},
        {label: 'Japan', value:'jpn', parent:'asia', untouchable:false},
        {label: 'South Korea', value:'sk', parent:'asia', untouchable:false},
        {label: 'Thailand', value:'thi', parent:'asia', untouchable:false},
        {label: 'Vietnam', value:'vtm', parent:'asia', untouchable:false},

    ]}
    onChange
    multiple={true}
    min={0}
    max={1}

    defaultValue={this.state.countries}
    containerStyle={{height: 40}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle = {{height:100}}
    onChangeItem={item => this.setState({
        countries: item // an array of the selected items
    })}
/>

                </View>
                <View style = {{
                    alignItems:'center',
                }}>
                    <TouchableOpacity style = {{
                        width:150,
                        height:50,
                        borderWidth:1.8,
                        borderColor:'navy',
                        borderRadius:15,
                        marginTop:100,
                        backgroundColor:'#87ceeb',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    
                    onPress = {()=>{
                        if(this.state.studentName!==''&&this.state.sex!==''&&this.state.age!==''&&this.state.ageGroup!==''&&this.state.countries!==[]){
                            this.useInfoAndNavigate();
                        }else{
                            alert("Please fill out all of the information.")
                        }
                    }}
                    >
                        <Text style = {{
                            fontSize:15,
                            color:'blue',
                            fontWeight:500
                        }}>
                            Submit Information
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}