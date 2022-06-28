import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import KeyboardAvoidingView from 'react-native';


function Register(props) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.bannerText}> Quizler </Text>
            <Text style = {styles.notRegistered}> This number is not registered. Please Sign Up.</Text>
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios"? "padding" : "height"}> */}
            <TextInput style = {styles.inputName} placeholder='Enter your name'></TextInput>
            <TextInput style = {styles.inputNumber} placeholder='Enter your number'></TextInput>
            <TextInput style = {styles.inputDob} placeholder='Enter your Date of Birth'></TextInput>
            <TextInput style = {styles.inputEmail} placeholder='Enter your Email ID'></TextInput>
            {/* </KeyboardAvoidingView>
            {/* <Text style = {styles.gender}> Gender : </Text>
            <Dropdown>

            </Dropdown> */} 
            <TouchableOpacity style = {styles.registerUser} onPress={()=> handleRegister()}>
        <Text style={styles.registerText}> Register! </Text>
      </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#FFF",
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
        marginBottom : 30,
        height : 40,
        textAlign : 'center',
    },
    registerUser : {
        marginTop : 20,
        alignSelf : 'center',
        width : '80%',
        borderRadius : 10,
        height: 40,
        backgroundColor : '#841584'
      },
      registerText : {
        marginVertical : 4,
        color : "#FFF",
        alignSelf : 'center',
        textAlignVertical : 'center',
        fontSize : 18
      },
})

export default Register;