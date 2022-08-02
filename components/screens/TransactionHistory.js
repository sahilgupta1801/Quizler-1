import React from 'react';

import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../reusableComponents/Header';
import {transactionApi} from '../../data/allDataVariables';

function TransactionHistory(props) {

    return (
        <View style = {styles.container}>
            <Header navigation={props.navigation} title = {'Transaction History'} hamburger = {0} wallet={0} headerColor = {'#A865C9'} />
            <ScrollView style = {styles.scroll}>
                {     
                    transactionApi.map((transaction, index) => { 
                        return (
                            <TouchableOpacity style = {styles.transactions} key = {index}>
                                <View style = {styles.transactionboxTouch}>
                                    <Text style = {styles.date}> {transaction.date} </Text> 
                                    <Text style = {styles.transactionWon}> 
                                        {transaction.status} 
                                    </Text>
                                </View>
                                
                                <View style = {styles.transactionbox}>
                                        <Text style = {styles.transactionTopic}> {transaction.type} </Text>
                                        <Text style = {styles.transactionAmountWon}> {transaction.amount} </Text>
                                </View>     
                            </TouchableOpacity>
                        )            
                    })             
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    scroll : {
        marginTop : 30
    },

    transactions : {
        marginBottom : 20
    },
    transactionboxTouch : {
        width : '90%',
        height : 20,
        borderWidth : 1,
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        flexDirection : 'row',
        alignSelf : 'center',
        justifyContent : 'space-between'
    },
    transactionbox : {
        height : 60,
        width : '90%',
        borderBottomLeftRadius : 5,
        borderBottomRightRadius : 5,
        borderWidth : 1,
        alignSelf : 'center',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    date : {
        fontWeight : 'bold',
        fontSize : 10,
        marginLeft : 10
    },
    transactionTopic : {
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : 10
    },
    transactionAmountWon : {
        marginRight : 20,
        fontWeight : 'bold',
        fontSize : 24,
    },
    transactionWon : {
        alignSelf : 'center',
        fontSize : 12,
        fontWeight : 'bold',
        marginRight : 20
    }
})

export default TransactionHistory;