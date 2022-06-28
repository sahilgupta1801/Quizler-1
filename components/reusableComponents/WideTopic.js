import React from 'react';
import {View, Dimensions, TouchableOpacity, Image, StyleSheet} from 'react-native';

const { width } = Dimensions.get('window');

function WideTopic(props) {
    return (
        <View style = {styles.overallView}>
            <TouchableOpacity style = {styles.view1} >
                <Image style = {styles.topicImage} resizeMode='stretch' source = {require('../../assets/Potter.png')}/>
                    {/* <Text style = {styles.text1}>{props.text1}</Text> */}
            </TouchableOpacity>
        </View>
    );
}
 
const styles = StyleSheet.create({
    overallView : {
        flexDirection : 'row',
        justifyContent : 'center'
    },
    topicImage : {
      marginTop: 5,
      width: width*0.9,
      margin: 5,
      height: 50,
      borderRadius: 10,
      justifyContent : 'center',
      alignSelf : 'center'
    },
    view1: {
        marginTop: 5,
        width: width*0.9,
        marginLeft : 5,
        margin: 5,
        height: 50,
        borderRadius: 10,
        justifyContent : 'center',
        alignSelf : 'center'
        //paddingHorizontal : 30
      }
});

export default WideTopic;