import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../reusableComponents/Header';

function GameHistory(props) {

    var gameApi = [{id : 'ABX', date : '08-07-2022' , topic : 'F1' , amountWon : ''} , 
                   {id : 'ABG', date : '08-07-2022' , topic : 'Harry Potter' , amountWon : 'Rs 25'},
                   {id : 'ABV', date : '08-07-2022' , topic : 'Chelsea' , amountWon : 'Rs 490'},
                   {id : 'ABW', date : '07-07-2022' , topic : 'F1' , amountWon : ''} , 
                   {id : 'ABQ', date : '07-07-2022' , topic : 'Harry Potter' , amountWon : 'Rs 25'},
                   {id : 'ABE', date : '06-07-2022' , topic : 'F.R.I.E.N.D.S' , amountWon : 'Rs 25'} , 
                   {id : 'ABS', date : '06-07-2022' , topic : 'Game of Thrones' , amountWon : ''},
                   {id : 'ABA', date : '06-07-2022' , topic : 'Chelsea' , amountWon : 'Rs 490'}
                   ];

    return (
        <View style = {styles.container}>
            <Header navigation={props.navigation} title = {'Game History'} hamburger = {0} wallet={0} />
            <ScrollView style = {styles.scroll}>
                {     
                    gameApi.map((game, index) => { 
                        return (
                            <TouchableOpacity style = {styles.games} key = {index}>
                                <View style = {styles.gameboxTouch}>
                                <Text style = {styles.date}> {game.date} </Text> 
                                {
                                    game.amountWon ?
                                    <Text style = {styles.gameWon}> Win! </Text>
                                    :
                                    <View /> 
                                }
                                </View>
                                
                                <View style = {styles.gamebox}>
                                        <Text style = {styles.gameTopic}> {game.topic} </Text>
                                        {
                                            game.amountWon ? 
                                                <Text style = {styles.gameAmountWon}> {game.amountWon} </Text>
                                            : 
                                            <View>
                                            </View>

                                        }
                                        
                                        
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

    games : {
        marginBottom : 20
    },
    gameboxTouch : {
        width : '90%',
        height : 20,
        borderWidth : 1,
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        flexDirection : 'row',
        alignSelf : 'center',
        justifyContent : 'space-between'
    },
    gamebox : {
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
    gameTopic : {
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : 10
    },
    gameAmountWon : {
        marginRight : 20,
        fontWeight : 'bold',
        fontSize : 24,
        color : 'green'
    },
    gameWon : {
        alignSelf : 'center',
        color : 'green',
        fontSize : 12,
        fontWeight : 'bold',
        marginRight : 20
    }
})
export default GameHistory;