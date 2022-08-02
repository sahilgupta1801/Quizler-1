import React from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

function ContestCard(props) {

    const handlePlayNow = () => {
        props.navigation.navigate('Matchmaking' , {prizePool : props.winning})
    }
    return (
        <View style={styles.contestCard} backgroundColor = {props.color}>
            <View style = {styles.contestLeft}>
            <Text style= {styles.contestName}>
                {props.contestName}
            </Text>
            <Text style = {styles.prizePoolText}>
                Winner Takes : Rs {props.winning} 
            </Text>
            </View>
            
            {/* <Text style = {styles.prizePoolAmount}>
                {props.winning}
            </Text> */}
            <View style= {styles.contestMiddle}>
                <Text style = {styles.onlineText}>
                    Online
                </Text>
                <Text style = {styles.onlineNumber}>
                    {props.currentOnline}
                </Text>
            </View>
            <TouchableOpacity style = {styles.playNowButton} onPress={()=> handlePlayNow()}>
                <Text style = {styles.entryFee}> Entry </Text>
                <Text style = {styles.entryNumber}>Rs. {props.entry} </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contestCard : {
        borderWidth : 1,
        borderColor : '#000',
        marginTop : 20,
        width : '95%',
        height : 80,
        alignSelf : 'center',
        alignContent : 'center',
        //backgroundColor : '#A865C9',
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderRadius : 10
    },
    contestLeft : {

    },
    contestName : {
        paddingTop : 15,
        fontSize : 12,
        paddingLeft: 10,
        color : '#FFF',
    },
    // prizePoolAmount : {
    //     paddingLeft : 10,
    //     paddingTop : 10,
    // },
    prizePoolText : {
        paddingLeft : 10,
        paddingTop : 5,
        fontSize: 14,
        fontWeight : 'bold',
        color : '#FFF'
    },
    contestMiddle : {
        paddingTop : 15,
        paddingLeft : 5,
    },
    onlineText : {
        color : '#FFF',
        fontSize : 12
    },
    onlineNumber : {
        color : '#FFF',
        alignSelf : 'center',
        fontSize : 14,
        fontWeight : 'bold',
        paddingTop : 5
    },
    playNowButton : {
        borderWidth : 2,
        borderColor : "#FFF",
        marginTop : 5,
        width : '25%',
        height : 65,
        borderRadius : 5,
        backgroundColor : '#FFF',
        marginRight : 5
    },
    entryFee : {
        alignSelf : 'center',
        fontWeight : 'bold',
        fontSize : 14,
        paddingTop : 5
    },
    entryNumber : {
        alignSelf : 'center',
        fontSize : 20,
        fontWeight : 'bold',
    }
})

export default withNavigation(ContestCard);