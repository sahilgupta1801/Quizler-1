import React from 'react';
import {View, ScrollView , StyleSheet, Image, Text} from 'react-native'
import Header from '../reusableComponents/Header';
import WideTopic from '../reusableComponents/WideTopic';


function VerticalTopicDisplay(props) {

    var trendingTopics = [{color : 'pink', text : 'F1'},{color : '#Add8E6', text : 'Chelsea'},
        {color : 'pink', text : 'IPL'},{color : 'pink', text : 'F.R.I.E.N.D.S'},
        {color : '#Add8e6', text : 'Game of Thrones'}];
    return (
        <View style = {styles.container}>
            <Header navigation = {props.navigation} heading = {props.navigation.state.params.heading} hamburger = {0} wallet = {0}/>
            <ScrollView style = {styles.scroll}>
            {
                trendingTopics.map((item,index) => {
                    return (
                        <WideTopic height = {100} key = {index} margin = {10} />
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