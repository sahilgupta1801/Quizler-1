import React from 'react';
import {View, ScrollView , StyleSheet, Image, Text} from 'react-native'
import Header from '../reusableComponents/Header';
import WideTopic from '../reusableComponents/WideTopic';
import {trendingCards, youmightLikeCards, genres, genreCards} from '../../data/allDataVariables';


function VerticalTopicDisplay(props) {

    var heading = props.navigation.state.params.heading
    var type = props.navigation.state.params.type;
    console.log(heading)
    console.log(genreCards[heading])
    var cards = (type == 1 ? trendingCards : type == 2 ? youmightLikeCards : type == 3 ? genres : genreCards[heading] )
    var onClickScreen = props.navigation.state.params.genres ? 'VerticalTopicDisplay' : 'TopicScreen'
    
    return (
        <View style = {styles.container}>
            <Header navigation = {props.navigation} title = {heading} hamburger = {0} wallet = {0}/>
            <ScrollView style = {styles.scroll}>
            {
                cards.map((item,index) => {
                    return (
                        <WideTopic height = {100} key = {index} margin = {10} onClick = {onClickScreen} text = {item.text} />
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
    }
})

export default VerticalTopicDisplay;