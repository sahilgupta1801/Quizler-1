import React from 'react';
import {View, Text , TouchableOpacity, Image, StyleSheet} from 'react-native';
import ProgressBar from 'react-native-animated-progress';

function InGame(props) {
    return (
        <View style= {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.topicName}> Harry Potter </Text>
                <Text style = {styles.prizePool}> Prize Pool : Rs 45 </Text>
            </View>
            <View style = {styles.progressBar}>
                <ProgressBar 
                    backgroundColor= '#000000'
                    trackColor='#A865C9'
                    height = {40}
                    progress = {60}
                />
            </View>
            <View style={styles.avatars}>
                <View style = {styles.user}>
                    <Image style= {styles.userIcon} source = {require('../../assets/avatar1.png')} />
                    <Text style = {styles.userName}> Sahil Gupta </Text>
                    <Text style = {styles.userPoints}> 128 Pts. </Text>
                </View>
                <Text style = {styles.versus}> vs </Text>
                <View style = {styles.opponent}>
                    <Image style= {styles.opponentIcon} source = {require('../../assets/avatar7.png')} />
                    <Text style = {styles.opponentName}> Ammar Khurshid </Text>
                    <Text style = {styles.opponentPoints}> 135 Pts. </Text>
                </View>
            </View>

            <View style={styles.questionBox}>
                <Text style= {styles.question}>
                    Q4 : Who is the Prime Minister of India?
                </Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style = {styles.optionBox}>
                    <Text style = {styles.optionText}> A : Ammar Khurshid </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.optionBox}>
                    <Text style = {styles.optionText}> B : Riya Mishra </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.optionBox}>
                    <Text style = {styles.optionText}> C : Sandeep Chahar </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.optionBox}>
                    <Text style = {styles.optionText}> D : Shaurybir Mishra</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ECECEC'
    },
    header : {
        marginTop : 60,
        // flexDirection : 'row',
        // justifyContent : 'space-evenly'
    },
    topicName : {
        fontSize : 32,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    prizePool : {
        fontSize : 16,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    avatars : {
        marginTop : 30,
        flexDirection : 'row',
        justifyContent : 'space-evenly' 
    },
    user : {

    },
    userIcon : {
        height : 80,
        width : 80,
        alignSelf : 'center'
    },
    userName : {
        marginTop : 10,
        fontSize : 14,
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
        height : 80,
        width : 80,
        alignSelf : 'center'
    },
    versus : {
        alignSelf : 'center',
        fontWeight : 'bold',
        fontSize : 20
    },
    opponentName : {
        marginTop : 10,
        fontSize : 14,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    opponentPoints : {
        marginTop : 10,
        fontSize : 20,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    progressBar : {
        width : '80%',
        alignSelf : 'center',
        marginTop : 50,
        
    },
    questionBox : {
        borderRadius : 5,
        height : 80,
        width : '95%',
        borderWidth : 2,
        borderColor : '#A865C9',
        marginTop : 40,
        alignSelf : 'center',
        justifyContent : 'center'
    },
    question : {
        fontSize : 18,
        fontWeight : 'bold',
        alignSelf : 'center',
        textAlign : 'center'
    },
    options : {
        marginTop : 20
    },
    optionBox : {
        marginTop : 10,
        width : '95%',
        height : 60,
        borderWidth : 2,
        borderColor : '#A865C9',
        borderRadius : 5,
        alignSelf : 'center',
        justifyContent : 'center',
    },
    optionText : {
        fontSize : 16,
        fontWeight : 'bold',
        alignSelf : 'center',
        textAlign : 'center'
    }
})
export default InGame;