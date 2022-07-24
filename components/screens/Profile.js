import React from 'react';
import {View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { userData } from '../../data/allDataVariables';
import  Header  from '../reusableComponents/Header';
import { avatars } from '../../data/constants';

function Profile(props) {

    const goGameHistory = () => {
        props.navigation.navigate('GameHistory')
    }

    const goTransactionHistory = () => {
        props.navigation.navigate('TransactionHistory')
    }

    const goToVerifyKYC = () => {
        props.navigation.navigate('KYCVerify')
    }
    var forward = '>'
    var avatarSel = userData.avatarSel
    return (
        <View style = {styles.container}>
            <StatusBar hidden = {true} />
            <Header navigation = {props.navigation} title = {'My Profile'} hamburger = {1}  wallet={0}/>

            <View style = {styles.profileSection}>
                <Image style = {styles.profileAvatar} source = {avatars[avatarSel]}/>
                <View style = {styles.profileRight}>
                    <Text style = {styles.userName}> {userData.name} </Text>
                    <Text style = {styles.userNumber}> {userData.number} </Text>
                    <Text style = {styles.userEmail}> {userData.email} </Text>
                    <Text style = {styles.userDOB}> {userData.dob} </Text>
                </View>
            </View> 
            
            <TouchableOpacity style = {styles.kycBox} onPress={() => goToVerifyKYC()}>
                <Text style = {styles.kycText}>
                    KYC Status : {userData.kyc}
                </Text>
                {/* Needs a right arrow to take user to KYC page */}
            </TouchableOpacity>

            <View style = {styles.skillBox}>
                <Text style = {styles.kycText}> Skill Rating : {userData.skillScore} </Text>
                {/* Needs an info icon */}
            </View>

            <TouchableOpacity style = {styles.wideBox} onPress={() => goTransactionHistory()}>
                <Text style = {styles.wideText}> Transaction History </Text>
                <Text style = {styles.forwardArrow}> {forward} </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.wideBox2} onPress={() => goGameHistory()} >
                <Text style = {styles.wideText}> Game History </Text>
                <Text style = {styles.forwardArrow}> {forward} </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.wideBox2} >
                <Text style = {styles.wideText}> Analytics </Text>
                <Text style = {styles.forwardArrow}> {forward} </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    profileSection : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 50
    },
    profileAvatar : {
        height : 150,
        width : 150
    },
    profileRight : {

    },
    userName : {
        fontSize : 20,
        fontWeight : 'bold',
        marginBottom : 10,
    },
    userNumber : {
        fontSize : 20,
        marginBottom : 10,
    },
    userEmail : {
        fontSize : 14,
        marginBottom : 10,
    },
    userDOB : {
        fontSize : 20,
        marginBottom : 10,
    },
    kycBox : {
        alignSelf : 'center',
        height : 60,
        width : '70%',
        marginTop : 50,
        justifyContent : 'center',
        borderRadius : 10,
        borderWidth : 1,
        borderColor : '#000000'
    },
    kycText : {
        marginLeft : 10,
        fontWeight : 'bold'
    },
    skillBox : {
        alignSelf : 'center',
        height : 60,
        width : '70%',
        marginTop : 20,
        justifyContent : 'center',
        borderRadius : 10,
        borderWidth : 1,
        borderColor : '#000000'
    },
    wideBox : {
        alignSelf : 'center',
        height : 60,
        width : '85%',
        marginTop : 50,
        justifyContent : 'space-between',
        borderRadius : 10,
        borderWidth : 1,
        borderColor : '#000000',
        flexDirection : 'row',
        alignItems : 'center'
    },
    wideBox2 : {
        alignSelf : 'center',
        height : 60,
        width : '85%',
        marginTop : 20,
        justifyContent : 'space-between',
        borderRadius : 10,
        borderWidth : 1,
        borderColor : '#000000',
        alignItems : 'center',
        flexDirection : 'row',
    },
    wideText : {
        marginLeft : 10,
        fontWeight : 'bold',
        fontSize : 16
    },
    forwardArrow : {
        marginRight : 20,
        fontSize : 30
    },
})

export default Profile;