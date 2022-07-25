import React from 'react';
import { Image, StyleSheet , Dimensions, View, Text, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

const { width } = Dimensions.get('window');

function WideTopic(props) {

    const handleTopicPress = (targetPage) => {
        var type = props.type ;
        if(type == 3) {
            type = 4;
        }
        props.navigation.navigate(targetPage, {heading : props.text, genres : 0, type : type, color : props.color})
    }
    return (
            <TouchableOpacity marginTop = {props.margin} height = {props.height} style = {styles.view1} onPress={()=> handleTopicPress(props.onClick)} >
                <Image height = {props.height} style = {styles.topicImage} resizeMode= 'contain' source = {require('../../assets/Potter.png')}/>
                    {/* <Text style = {styles.text1}>{props.text1}</Text> */}
            </TouchableOpacity>
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
      borderRadius: 10,
      justifyContent : 'center',
      alignSelf : 'center'
    },
    view1: {
        width: width*0.9,
        marginLeft : 5,
        margin: 5,
        borderRadius: 10,
        justifyContent : 'center',
        alignSelf : 'center',
        //paddingHorizontal : 30
      }
});

export default withNavigation(WideTopic);