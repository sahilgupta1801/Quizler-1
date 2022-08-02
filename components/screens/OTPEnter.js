import React from 'react';
import {View, StyleSheet, TouchableOpacity , Image , TextInput , Text} from 'react-native';
import { userData } from '../../data/allDataVariables';

function OTPEnter(props) {

    const goBack = () => {
       //props.navigation.goBack();
    }

    var mobileNumber = props.navigation;
    mobileNumber = userData.number
    return (
        <View style={styles.container}>
          <Text style = {styles.bannerText}> Quizler </Text>
          <Text style = {styles.signUp}> Your mobile : </Text>
          <TouchableOpacity style = {styles.truecaller} onPress={() => goBack()}>
            <Text style = {styles.enterNumber}> {mobileNumber}</Text>
            <Image style = {styles.signinImage}  source = {require('../../assets/edit-icon.png')} /> 
          </TouchableOpacity>
          
          <TextInput style = {styles.inputNumber} placeholder='Enter your OTP'></TextInput>
          <TouchableOpacity style = {styles.getStarted} onPress={()=> handleGetStarted()}>
            <Text style={styles.getStartedtext}> Let's Go! </Text>
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
        fontSize : 18,
        fontWeight : 'bold',
        marginBottom : 10
      },
      enterNumber : {
        alignSelf : 'center',
        fontSize : 20,
        fontWeight : 'bold',
        marginRight : 10
      },
      truecaller : {
        marginTop : 20,
        alignSelf : 'center',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 30
      },
      signinImage : {
        height : 30,
        width : 30,
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
});

export default OTPEnter;