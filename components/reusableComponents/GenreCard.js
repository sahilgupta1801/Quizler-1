import React from 'react';
import { Image, StyleSheet , Dimensions, View, Text, TouchableOpacity} from 'react-native';
import TopicHome from '../screens/TopicHome';
import { withNavigation } from 'react-navigation';

const { width } = Dimensions.get('window');

function GenreCard(props) {

    const handleGenrePress = () => {
        props.navigation.navigate('VerticalGenreDisplay', {heading : props.text})
    }
    return (
        <TouchableOpacity style = {styles.view} onPress={() => handleGenrePress()}>
            <Image style = {styles.topicImage} resizeMode='stretch' source = {require('../../assets/F1.png')}/> 
            {/* <Text style = {styles.text}>{props.text}</Text> */}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    view: {
        //marginTop: 10,
        width: width*0.4,
        margin: 5,
        height: 100,
        borderRadius: 10,
        justifyContent : 'center'
        //paddingHorizontal : 30
      },
      topicImage : {
        marginTop: 10,
        width: width*0.4,
        margin: 5,
        height: 100,
        borderRadius: 10,

      },
      text : {
        fontWeight : 'bold',
        fontSize : 20,
        alignSelf : 'center'
      }
});
export default withNavigation(GenreCard);