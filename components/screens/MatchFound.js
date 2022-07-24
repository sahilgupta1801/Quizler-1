import React,{useState} from 'react';
import {View,Text,Image,Dimensions, TouchableOpacity, StyleSheet} from 'react-native';

const { width } = Dimensions.get('window');

function MatchFound(props) {

    const [time, setTime] = React.useState(props.intialValue || 10);
    const timerRef = React.useRef(time);

    React.useEffect(() => {
        const timerId = setInterval(() => {
          timerRef.current -= 1;
          if (timerRef.current < 0) {
            clearInterval(timerId);
          } else {
            setTime(timerRef.current);
          }
        }, 1000);
        return () => {
          clearInterval(timerId);
        };
      }, []);

    return (
        <View style={styles.container}>
            <Text style = {styles.topicHeader}> F1</Text>
            <Text style = {styles.prizePool}> Prize Pool : Rs 45</Text>
            <Text style = {styles.matchFound}> Match Found!</Text>
            <View style = {styles.avatars}>
                <View style = {styles.currentUser}>
                    <Image style = {styles.currentUserAvatar} source={require('../../assets/avatar1.png')}/>
                    <Text style = {styles.currentUserName}> Sahil Gupta</Text>
                    <Text style = {styles.currentUserLocation}> India </Text>
                </View>
                <Text style = {styles.versus}> vs </Text>
                <View style = {styles.opponent}>
                    <Image style = {styles.opponentAvatar} source={require('../../assets/avatar7.png')} />
                    <Text style = {styles.opponentName}> Ammar Khurshid </Text>
                    <Text style = {styles.opponentLocation}> Pakistan </Text>
                </View>
            </View>
            <Text style = {styles.beginningIn}> Beginning in {time} </Text>
            <Text style = {styles.allTheBest}> Note : Question 7 has double the points! </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ECECEC'
    },
    topicHeader : {
        fontSize : 36,
        fontWeight : 'bold',
        marginTop : 100,
        alignSelf : 'center'
    },
    prizePool : {
        marginTop : 80,
        alignSelf : 'center',
        fontWeight : 'bold',
        fontSize : 26
    },
    matchFound : {
        marginTop : 20,
        alignSelf : 'center',
        fontWeight : 'bold',
        fontSize : 20
    },
    avatars : {
        flexDirection : 'row',
        marginTop : 80,
        justifyContent : 'space-evenly'
    },
    currentUser : {
        marginLeft : 0.05*width
    },
    currentUserName : {
        fontSize : 18,
        fontWeight : 'bold',
        alignSelf : 'center',
        marginTop : 20
    },
    currentUserAvatar : {
        height : 100,
        width : 100,
        alignSelf : 'center'
    },
    currentUserLocation : {
        fontSize : 18,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    versus : {
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 0.05*width,
        marginTop : 30,
    },
    opponent : {
        
    },
    opponentAvatar : {
        height : 100,
        width : 100,
        alignSelf : 'center'
    },
    opponentName : {
        fontSize : 18,
        fontWeight : 'bold',
        alignSelf : 'center',
        marginTop : 20
    },
    opponentLocation : {
        fontSize : 18,
        fontWeight : 'bold',
        alignSelf : 'center'
    },
    beginningIn : {
        fontWeight : 'bold',
        fontSize : 20,
        alignSelf : 'center',
        marginTop : 50
    },
    allTheBest : {
        marginTop : 20,
        fontSize : 18,
        fontWeight : 'bold',
        alignSelf : 'center'
    }

})

export default MatchFound;