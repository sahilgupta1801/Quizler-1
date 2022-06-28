import React from 'react';
import { Image, StyleSheet , Dimensions, View, Text, TouchableOpacity} from 'react-native';


const { width } = Dimensions.get('window');

function DoubleCard(props) {
    return (
    <View style = {styles.overallView}>
        <TouchableOpacity style = {styles.view1} >
        <Image style = {styles.topicImage} resizeMode='stretch' source = {require('../../assets/GOT.png')}/>
            {/* <Text style = {styles.text1}>{props.text1}</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style = {styles.view2} >
        <Image style = {styles.topicImage} resizeMode='stretch' source = {require('../../assets/GOT.png')}/>
            {/* <Text style = {styles.text2}>{props.text2}</Text> */}
        </TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({
    overallView : {
        flexDirection : 'row'
    },
    topicImage : {
      marginTop: 5,
      width: width*0.45,
      margin: 5,
      height: 80,
      borderRadius: 10,
      justifyContent : 'center'
    },
    view1: {
        marginTop: 5,
        width: width*0.45,
        marginLeft : 5,
        margin: 5,
        height: 80,
        borderRadius: 10,
        justifyContent : 'center'
        //paddingHorizontal : 30
      },
      text1 : {
        fontWeight : 'bold',
        fontSize : 14,
        alignSelf : 'center'
      },
      view2 : {
        marginTop: 5,
        width: width*0.45,
        margin: 5,
        marginLeft : 10,
        height: 80,
        borderRadius: 10,
        justifyContent : 'center'
      },
      text2 : {
        fontWeight : 'bold',
        fontSize : 14,
        alignSelf : 'center'
      }
});
export default DoubleCard;