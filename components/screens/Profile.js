import React from 'react';
import {View, StyleSheet, StatusBar, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import  Header  from '../reusableComponents/Header';

function Profile(props) {

    const goGameHistory = () => {
        props.navigation.navigate('GameHistory')
    }

    const goTransactionHistory = () => {
        props.navigation.navigate('TransactionHistory')
    }
    var kyc = 0;
    return (
        <View style = {styles.container}>
            <StatusBar hidden = {true} />
            <Header navigation = {props.navigation} title = {'My Profile'} hamburger = {1}  wallet={0}/>

            <View style = {styles.profileSection}>
                <Image style = {styles.profileAvatar} source = {require('../../assets/avatar1.png')}/>
                <View style = {styles.profileRight}>
                    <Text style = {styles.userName}> Sahil Gupta </Text>
                    <Text style = {styles.userNumber}> 911****568 </Text>
                    <Text style = {styles.userEmail}> sahilgupta0118@gmail.com </Text>
                    <Text style = {styles.userDOB}> 18/01/2000 </Text>
                </View>
            </View> 
            
            <TouchableOpacity style = {styles.kycBox}>
                <Text style = {styles.kycText}>
                    KYC Status : Not Verified
                </Text>
                {/* Needs a right arrow to take user to KYC page */}
            </TouchableOpacity>

            <View style = {styles.skillBox}>
                <Text style = {styles.kycText}> Skill Rating : 1050 </Text>
                {/* Needs an info icon */}
            </View>

            <TouchableOpacity style = {styles.wideBox} onPress={() => goTransactionHistory()}>
                <Text style = {styles.wideText}> Transaction History </Text>
                {/* Add right side icon */}
            </TouchableOpacity>

            <TouchableOpacity style = {styles.wideBox2} onPress={() => goGameHistory()} >
                <Text style = {styles.wideText}> Game History </Text>
                {/* Add right side icon */}
            </TouchableOpacity>

            <TouchableOpacity style = {styles.wideBox2} >
                <Text style = {styles.wideText}> Analytics </Text>
                {/* Add right side icon */}
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
        borderRadius : 5,
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
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#000000'
    },
    wideBox : {
        alignSelf : 'center',
        height : 60,
        width : '85%',
        marginTop : 50,
        justifyContent : 'center',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#000000'
    },
    wideBox2 : {
        alignSelf : 'center',
        height : 60,
        width : '85%',
        marginTop : 20,
        justifyContent : 'center',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#000000'
    },
    wideText : {
        marginLeft : 10,
        fontWeight : 'bold',
        fontSize : 16
    }
})

export default Profile;