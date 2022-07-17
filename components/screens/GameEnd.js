import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import HorizontalCarousal from '../reusableComponents/HorizontalCarousal';

function GameEnd(props) {

    var trendingCards = [{color : 'pink', text : 'F1'},{color : '#Add8E6', text : 'Chelsea'},
        {color : 'pink', text : 'IPL'},{color : 'pink', text : 'F.R.I.E.N.D.S'},
        {color : '#Add8e6', text : 'Game of Thrones'}];


    var back = '<';
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.header}>
                <Text style = {styles.back}> {back} </Text>
                <Text style = {styles.topic}> Harry Potter </Text>
            </TouchableOpacity>

            <View style={styles.avatars}>
                <View style = {styles.user}>
                    <Image style= {styles.userIcon} source = {require('../../assets/avatar1.png')} />
                    <Text style = {styles.userName}> Sahil Gupta </Text>
                    <Text style = {styles.userPoints}> 148 Pts. </Text>
                </View>
                <Text style = {styles.versus}> vs </Text>
                <View style = {styles.opponent}>
                    <Image style= {styles.opponentIcon} source = {require('../../assets/avatar7.png')} />
                    <Text style = {styles.opponentName}> Ammar Khurshid </Text>
                    <Text style = {styles.opponentPoints}> 135 Pts. </Text>
                </View>
            </View>

            <Text style = {styles.feedback}> You Win :) Great Job ! </Text>

            <TouchableOpacity style = {styles.rematch}>
                <Text style = {styles.rematchText}> Rematch ! </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.lookAnotherOpponent}>
                <Text style = {styles.lookAnotherOpponentText}> Look for another opponent </Text>
            </TouchableOpacity>

            <Text style = {styles.newTopicText}> Play a new Topic! </Text>
            <View style = {styles.horizontal}>
                <HorizontalCarousal image = 'F1' cards = {trendingCards}/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    header : {
        flexDirection : 'row',
        marginTop : 20,
        justifyContent : 'flex-start'
    },
    back : {
        alignSelf : 'flex-start',
        marginTop : 60,
        marginLeft : 30,
        fontSize : 18,
        fontWeight : 'bold'
    },
    topic : {
        fontWeight : 'bold',
        fontSize : 30,
        marginTop : 50,
        alignSelf : 'center',
        marginLeft : 60,
    },
    avatars : {
        marginTop : 60,
        flexDirection : 'row',
        justifyContent : 'space-evenly' 
    },
    user : {

    },
    userIcon : {
        height : 100,
        width : 100,
        alignSelf : 'center'
    },
    userName : {
        marginTop : 10,
        fontSize : 20,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    userPoints : {
        marginTop : 10,
        fontSize : 20,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    opponent : {

    },
    opponentIcon : {
        height : 100,
        width : 100,
        alignSelf : 'center'
    },
    versus : {
        alignSelf : 'center',
        fontWeight : 'bold',
        fontSize : 20,
    },
    opponentName : {
        marginTop : 10,
        fontSize : 20,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    opponentPoints : {
        marginTop : 10,
        fontSize : 20,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    feedback : {
        fontWeight : 'bold',
        fontSize : 20,
        alignSelf : 'center',
        marginTop : 60
    },
    rematch : {
        height : 60,
        width : '80%',
        borderWidth : 2,
        borderColor : '#000000',
        alignSelf : 'center',
        marginTop : 30,
        borderRadius : 25,
        justifyContent : 'center',
    },
    rematchText : {
        textAlign : 'center',
        fontSize : 18,
        fontWeight : 'bold'
    },
    lookAnotherOpponent : {
        height : 60,
        width : '80%',
        borderWidth : 2,
        borderColor : '#000000',
        alignSelf : 'center',
        marginTop : 25,
        borderRadius : 25,
        justifyContent : 'center',
    },
    lookAnotherOpponentText : {
        textAlign : 'center',
        fontSize : 18,
        fontWeight : 'bold'
    },
    newTopic : {
        height : 60,
        width : '80%',
        borderWidth : 2,
        borderColor : '#000000',
        alignSelf : 'center',
        marginTop : 20,
        justifyContent : 'center',
        borderRadius : 25
    },
    newTopicText : {
        marginTop : 30,
        marginLeft : 20,
        fontSize : 18,
        fontWeight : 'bold'
    },
    horizontal : {
        marginTop : 10
    }
})
export default GameEnd;