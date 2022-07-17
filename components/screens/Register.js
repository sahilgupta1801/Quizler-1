import React, {Component, useEffect, useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import KeyboardAvoidingView from 'react-native';
import TopicCard from '../reusableComponents/TopicCard';
    
const { width } = Dimensions.get('window');

export default class Register extends Component{

    // componentDidMount() {
    //     setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
    // }
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.bannerText}> Quizler </Text>
                <Text style = {styles.notRegistered}> This number is not registered. Please Sign Up.</Text>
                {/* <KeyboardAvoidingView
                behavior={Platform.OS === "ios"? "padding" : "height"}> */}
                <TextInput style = {styles.inputName} placeholder='Enter your name'></TextInput>
                <TextInput keyboardType='number-pad' style={styles.inputNumber} placeholder='Enter your number'></TextInput>
                <TextInput style = {styles.inputDob} placeholder='Enter your Date of Birth'></TextInput>
                <TextInput keyboardType='email-address' style={styles.inputEmail} placeholder='Enter your Email ID'></TextInput>
                {/* </KeyboardAvoidingView>
                {/* <Text style = {styles.gender}> Gender : </Text>
                <Dropdown>
    
                </Dropdown> */}
                {/* <Text style = {styles.selectAvatar}> Select your Avatar! </Text> */}
                {/* <ScrollView
                    ref={(scrollView) => { this.scrollView = scrollView; } }
                    style={styles.containerScroll}
                    //pagingEnabled={true}
                    horizontal={true}
                    decelerationRate={0}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 30,
                    }}>
                    {
                        <View style = {styles.images}>
                            <Image style = {styles.avatar} source = {require('../../assets/avatar1.png')} />
                            <Image style = {styles.avatar} source = {require('../../assets/avatar2.png')} />
                            <Image style = {styles.avatar} source = {require('../../assets/avatar3.png')} />
                            <Image style = {styles.avatar} source = {require('../../assets/avatar4.png')} />
                            <Image style = {styles.avatar} source = {require('../../assets/avatar5.png')} />
                            <Image style = {styles.avatar} source = {require('../../assets/avatar6.png')} />
                            <Image style = {styles.avatar} source = {require('../../assets/avatar7.png')} />
                            <Image style = {styles.avatar} source = {require('../../assets/avatar8.png')} />
                        </View>                        
                    }
                </ScrollView> */}
                <TouchableOpacity style={styles.registerUser} onPress={() => handleRegister()}>
                    <Text style={styles.registerText}> Register! </Text>
                </TouchableOpacity>
            </View>
        );
    }      
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#FFF",
    },
    containerScroll : {

    },
    images : {
        flexDirection : 'row',
        marginLeft : 20,
        marginRight : 50,
        marginTop : 20
    },
    avatar : {
        width : width*0.2,
        height : 80,
        marginRight : 10
    },
    bannerText : {
        fontSize : 40,
        fontWeight : 'bold',
        paddingTop : 80,
        alignSelf : 'center',
        paddingBottom : 40
    },
    notRegistered : {
        fontSize : 14,
        fontWeight : 'bold',
        alignSelf : 'center',
        paddingBottom : 50
    },
    inputName : {
        width : '80%',
        borderWidth : 1,
        borderColor : "#000",
        borderRadius : 10,
        alignSelf : 'center',
        marginBottom : 30,
        height : 40,
        textAlign : 'center',
    },
    inputNumber : {
        width : '80%',
        borderWidth : 1,
        borderColor : "#000",
        borderRadius : 10,
        alignSelf : 'center',
        marginBottom : 30,
        height : 40,
        textAlign : 'center',
    },
    inputDob : {
        width : '80%',
        borderWidth : 1,
        borderColor : "#000",
        borderRadius : 10,
        alignSelf : 'center',
        marginBottom : 30,
        height : 40,
        textAlign : 'center',
    },
    inputEmail : {
        width : '80%',
        borderWidth : 1,
        borderColor : "#000",
        borderRadius : 10,
        alignSelf : 'center',
        marginBottom : 20, 
        height : 40,
        textAlign : 'center',
    },
    selectAvatar : {
        marginTop : 10,
        fontSize : 18,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    registerUser : {
        marginTop : 20,
        alignSelf : 'center',
        width : '80%',
        borderRadius : 10,
        height: 40,
        backgroundColor : '#841584',
        justifyContent : 'center'
      },
      registerText : {
        
        color : "#FFF",
        alignSelf : 'center',
        textAlignVertical : 'center',
        fontSize : 18
      },
})
