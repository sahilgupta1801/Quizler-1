import React from 'react';

import {View,Text, StyleSheet, Image} from 'react-native'; 

import ContestCard from '../reusableComponents/ContestCard';
import Header from '../reusableComponents/Header';

function TopicHome({navigation}) {

    var back = '<';

    const heading  = navigation.state.params.heading;
    var contests = [{
        entry : '0',
        winning : '0',
        bonus : '0',
        players : '2',
        contestName : "Practice Contest",
        currentOnline : '2500'
    },{
        entry : '5',
        winning : '9',
        bonus : '5%',
        players : '2',
        contestName : "Beginner's Pot",
        currentOnline : '1500'
    },
    {
        entry : '25',
        winning : '40',
        bonus : '10%',
        players : '2',
        contestName : "Intermediate Table",
        currentOnline : '1100'
    },
    {
        entry : '49',
        winning : '85',
        bonus : '10%',
        players : '2',
        contestName : "Hot Contest",
        currentOnline : '600'
    },
    {
        entry : '99',
        winning : '170',
        bonus : '15%',
        players : '2',
        contestName : "High Value Table",
        currentOnline : '400'
    }]

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title = {heading} hamburger={0} wallet={1}/>

            <Text style = {styles.contests}> Contests </Text>
            {
            contests.map((item, index) => {
                    return (
                        <ContestCard 
                        key={index} entry={item.entry} winning= {item.winning}
                        bonus={item.bonus} players={item.players} contestName={item.contestName}
                        currentOnline={item.currentOnline}
                        />
                    )
                })
            }          
            
        </View>


    );
}

const styles = StyleSheet.create({
    container : {
        
    },
    topBar : {
        flexDirection : 'row',
        borderBottomColor : '#000',
        borderBottomWidth : 1,
        height : 100,
        backgroundColor : '#A865C9',
        justifyContent : 'space-between',
        alignItems : 'center',
        // paddingTop : 60
    },
    backButton : {
        fontSize : 40,
        fontWeight : 'bold',
        paddingLeft : 10
    },
    // backtext : {
    //     marginTop : 20,
    //     fontSize : 14,
    //     paddingLeft : -20
    // },
    headLine : {
        fontWeight : 'bold',
        fontSize : 40,
        paddingLeft : 30
    },
    wallet : {
        height : 30,
        width : 30,
        marginRight : 30,
        marginTop : 15
    },
    contests : {
        marginTop : 30,
        fontSize : 32,
        fontWeight : 'bold',
        alignSelf : 'center',
        marginBottom : 20
    }
})

export default TopicHome;