import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native'
import Speech from 'expo-Speech'
import { Header } from 'react-native-elements'

export default class MainScreen extends Component{
    constructor(){
        super()
        this.state = {name:""}
    }
    speak = ()=>{
        var speak = this.state.name
        this.state.name === ""?alert('Please enter a word'):Speech.speak(speak)
    }
    render(){
        return(
            <View style = {styles.textContainer}>
               <Header backgroundColor = {"yellow"}
                        centerComponent = {{text:'Text To Speech Converter', style: {color: 'black', fontSize:16, fontWeight:bold},}}/>
                <Image style = {styles.imageIcon}
                source = {{uri:'https://www.slashdigit.com/wp-content/uploads/2020/03/text-to-speech-apps-1.jpg'}}/>
                <Text style = {styles.text}>
                    Enter The Word
                </Text>
                <TextInput style = {styles.inputBox}
                onChangeText = {(text)=>{
                 this.setState({name:text})
                }}
                value = {this.state.name}/>
                <View>
                    <TouchableOpacity style = {styles.button} onPress = {this.speak}>
                        <Text style = {styles.text2}>
                            Click to hear the word
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}
const styles = StyleSheet.create(
    {
        textContainer: {
            backgroundColor:'white',
            flex:1,
            justifyContent:'center'
        },
        imageIcon: {
            width: RFValue(50),
            height: RFValue(50),
            marginLeft: 95
        },
        text: {
            color:'black',
            fontSize: 20,
            textAlign:'center',
            alignSelf:'center',
            fontStyle:'bold',
            fontWeight:'bold',
        },
        inputBox: {
            marginTop: 20,
            width: '80%',
            alignSelf:'center',
            textAlign:'center',
            height:40,
            borderWidth:4,
            outLine:'none'
        },
        button: {
            padding:20,
            fontSize:20,
            textAlign:'center',
            backgroundColor:'yellow',
            marginTop:80,
            borderRadius: 50,
            alignSelf:'center',
            width:'80%',
            height:80
        }
    }
)