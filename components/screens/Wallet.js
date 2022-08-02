import React from 'react';
import {View, StyleSheet, StatusBar, Text, Image, TouchableOpacity} from 'react-native';
import  Header  from '../reusableComponents/Header';
import {userData} from '../../data/allDataVariables';

function Wallet(props) {

    const goToTransactions = () => 
    {
        props.navigation.navigate('TransactionHistory')
    }
    const goToAddCash = () => {
        props.navigation.navigate('AddCash')
    }
    const goToKYCVerify = () => {
        props.navigation.navigate('KYCVerify')
    }
    const goToManagePayments = () => {
        props.navigation.navigate('ManagePayments')
    }
    const goToWithdrawCash = () => {
        props.navigation.navigate('WithdrawCash')
    }
    var back = '<'
    var forward = '>'
    return (
        <View style = {styles.container}>
            <StatusBar hidden = {true} />
            <Header navigation = {props.navigation} title = {'My Wallet'} hamburger = {1} headerColor = {'#A865C9'}/>

            <Text style = {styles.totalBalanceText}> Total Balance : </Text>
            <Text style = {styles.totalBalanceAmount}> Rs. {userData.depositBalance + userData.winningsBalance + userData.bonusBalance} </Text>

            <View style = {styles.twoButtons}>
                <TouchableOpacity style ={styles.addCashButton} onPress={() => goToAddCash()}>
                    <Text style = {styles.addCashText}> Add Cash! </Text>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.allTransactionsButton} onPress={() => goToTransactions()}>
                    <Text style = {styles.allTransactionsText}> My Transactions! </Text>
                </TouchableOpacity>
            </View>

            <View style ={styles.boxView}>
                <View style = {styles.boxLeft}>
                    <Text style = {styles.boxText}> Deposit Wallet </Text>
                    <Text style = {styles.boxAmount}> Rs. {userData.depositBalance} </Text>
                </View>
                <TouchableOpacity onPress = {() => openDepositsToolTip()} >
                    <Image style = {styles.infoIcon} source = {require('../../assets/info-icon.png')} />
                </TouchableOpacity>
                 
            </View>
            
            <View style ={styles.boxView}>
                <View style = {styles.boxLeft}>
                    <Text style = {styles.boxText}> Winnings! </Text>
                    <Text style = {styles.boxAmount}> Rs. {userData.winningsBalance} </Text>
                </View>
                <TouchableOpacity style = {styles.withdrawButton} onPress={() => goToWithdrawCash()}>
                    <Text style = {styles.withdrawMoney}> Withdraw </Text>
                </TouchableOpacity>
            </View>

            <View style ={styles.boxView}>
                <View style = {styles.boxLeft}>
                    <Text style = {styles.boxText}> Bonus Wallet </Text>
                    <Text style = {styles.boxAmount}> Rs. {userData.bonusBalance} </Text>
                </View>
                <Image style = {styles.infoIcon} source = {require('../../assets/info-icon.png')} />
            </View>

            <TouchableOpacity style = {styles.boxView} onPress={() => goToManagePayments()}>
                <View style = {styles.boxLeft}>
                    <Text style = {styles.managePayments}> Manage Payment Methods </Text>
                    <Text style = {styles.paymentDesc}> Add/Remove Cards and Wallets </Text>
                </View>
                <Text style = {styles.forwardArrow}> {forward} </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.boxView} onPress={() => goToKYCVerify()}>
                <Text style = {styles.verifyKYC}> Verify KYC! </Text>
                <Text style = {styles.forwardArrow}> {forward} </Text>
            </TouchableOpacity>
                        
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }, 
    totalBalanceText : {
        fontWeight : 'bold',
        fontSize : 24,
        alignSelf : 'center',
        marginTop : 30
    },
    totalBalanceAmount : {
        fontWeight : 'bold',
        fontSize : 24,
        alignSelf : 'center',
        marginTop : 10
    },
    twoButtons : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 20,
        marginBottom : 20
    },
    addCashButton : {
        height : 40,
        width : '35%',
        borderWidth : 1,
        borderColor : '#000000',
        justifyContent : 'center'
    },
    addCashText : {
        textAlign : 'center',
        fontSize : 14,
        fontWeight : 'bold'
    },
    allTransactionsButton : {
        height : 40,
        width : '35%',
        borderWidth : 1,
        borderColor : '#000000',
        justifyContent : 'center'
    },
    allTransactionsText : {
        textAlign : 'center',
        fontSize : 14,
        fontWeight : 'bold'
    },
    boxView : {
        alignSelf : 'center',
        marginTop : 20,
        height : 80,
        width : '90%',
        borderWidth : 1,
        borderColor : '#000000',
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row',
        borderRadius : 10
    },
    boxLeft : {
        marginLeft : 20
    },
    boxText : {
        // fontWeight : 'bold',
        fontSize : 16
    },
    boxAmount : {
        fontWeight : 'bold',
        fontSize : 16
    },
    withdrawButton : {
        marginRight : 20,
        height : 50,
        borderColor : '#000000',
        borderWidth : 1,
        width : '30%',
        justifyContent : 'center',
        backgroundColor : '#000000',
        borderRadius : 5
    },
    withdrawMoney : {
        textAlign : 'center',
        color : '#FFFFFF'
    },
    managePaymentsView : {

    },
    paymentsLeft : {

    },
    managePayments : {
        fontWeight : 'bold',
        fontSize : 16
    },
    paymentDesc : {
        fontSize : 14,
    },
    verifyKYCView : {

    },
    verifyKYC : {
        marginLeft : 20,
        fontSize : 18,
        fontWeight : 'bold'
    },
    forwardArrow : {
        marginRight : 20,
        fontSize : 30
    },
    infoIcon : {
        height : 20,
        width : 20,
        marginRight : 25
    }
})

export default Wallet;