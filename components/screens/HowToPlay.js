import React from 'react';
import {View , Text, Image, StyleSheet, ScrollView} from 'react-native';
import Header from '../reusableComponents/Header';

function HowToPlay(props) {
    return (
        <ScrollView>
            < Header navigation={props.navigation} title = {'How to Play'} hamburger = {1} wallet={0} headerColor = {'#A865C9'}/>
            <Text style = {styles.heading}> Gameplay Mechanism </Text>

            <Text style = {styles.paragraph}> 1) Each contest will consist of 2 users being matched according to their overall skill rating. </Text>
            <Text style = {styles.paragraph}> 2) After being matched in a particular topic, they'll be asked a total of 7 questions, each having 4 options to choose from. </Text>
            <Text style = {styles.paragraph}> 3) There is always only 1 correct answer. Basis the points system, points will be awarded for each correct answer. </Text>
            <Text style = {styles.paragraph}> 4) At the end of the 7 questions, the player with the highest overall points wins and takes the prize pool. </Text>

            <Text style = {styles.heading}> Points System </Text>

            <Text style = {styles.paragraph}> 1) For every question the user would get 10 seconds to select their answer. 
                The highest points a user can win from a question is 20.</Text>
            <Text style = {styles.paragraph}>
                2) The counter will run on the top of the screen and a point will be deducted for every 0.5 seconds of delay in answering the question. 
            </Text>
            <Text style = {styles.paragraph}> 3) Example : User A answers the question correctly with 9 seconds still remaining on the clock and gets 18 points. 
                             User B answers the same question correctly with 4 seconds left on the clock, giving them 8 points.
            </Text>
            
            <Text style = {styles.paragraph}> 4) Question 7 has double the points so make sure you get that right :D </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {

    },
    heading : {
        marginTop : 20,
        fontSize : 28,
        marginLeft : 20,
        marginBottom : 20,
        fontWeight : '500'
    },
    paragraph : {
        marginLeft : 20,
        marginRight : 20,
        fontSize : 14,
        lineHeight : 20
    }
})

export default HowToPlay;