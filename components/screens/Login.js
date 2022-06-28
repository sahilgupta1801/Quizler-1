import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

function Login(props) {
    return (
        <View style={styles.container}>
      <Text style = {styles.bannerText}> Quizler </Text>
      <Text style = {styles.signUp}> Sign Up / Login </Text>
      <Text style = {styles.enterNumber}> Enter your mobile number to get started </Text>
      <TextInput style = {styles.inputNumber} placeholder='Enter your number'></TextInput>
      <TouchableOpacity style = {styles.getStarted} onPress={()=> handleGetStarted()}>
        <Text style={styles.getStartedtext}> Get Started! </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.truecaller} onPress={()=> handleTruecaller()}>
        <Image source={require('../../assets/sign-in.png')} style = {styles.signinImage}/>
        <Text style={styles.truecallertext}> Sign In With True caller </Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    bannerText : {
      fontSize : 40,
      fontWeight : 'bold',
      paddingTop : 120,
      paddingLeft : 120,
      paddingBottom : 60,
    },
    signUp : {
      paddingTop : 50,
      alignSelf : 'center',
      fontSize : 24,
      fontWeight : 'bold'
    },
    enterNumber : {
      paddingTop : 5,
      alignSelf : 'center',
      fontSize : 16,
      paddingBottom : 40
    },
    inputNumber : {
      textAlign : 'center',
      borderRadius : 10,
      borderColor : '#000',
      borderWidth : 1,
      width : '80%',
      height : 40,
      backgroundColor : "#EBEAED",
      alignSelf : 'center',
      marginBottom : 10
    },
    getStarted : {
      marginTop : 20,
      alignSelf : 'center',
      width : '80%',
      borderRadius : 10,
      height: 40,
      marginBottom : 50,
      backgroundColor : '#841584'
    },
    getStartedtext : {
      marginVertical : 4,
      color : "#FFF",
      alignSelf : 'center',
      textAlignVertical : 'center',
      fontSize : 18
    },
    truecaller : {
      marginTop : 50,
      width : '80%',
      alignSelf : 'center',
      borderRadius : 10,
      height : 40,
      backgroundColor : '#841584',
      justifyContent : 'flex-start',
      flexDirection : 'row',
    },
    truecallertext : {
      marginHorizontal : -10,
      marginTop : 5,
      fontSize : 18,
      color : '#FFF',
      alignItems : 'center'
    },
    signinImage : {
      marginTop : 5,
      height : 30,
      width : 30,
      marginHorizontal : 40,
    }
  });

export default Login;