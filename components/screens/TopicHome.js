import React, {useState} from 'react';

import {View,Text, StyleSheet, Image, Modal, TouchableOpacity} from 'react-native'; 

import ContestCard from '../reusableComponents/ContestCard';
import Header from '../reusableComponents/Header';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';


function TopicHome({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

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

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(false)}
                            >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* How to play ka model likhna hai yaha  */}
                </Modal>
        
            <View style = {styles.belowHeaderBox}>
                <Text style = {styles.contests}> Contests </Text>
                <TouchableOpacity style = {styles.howToPlayBlock} onPress = {() => setModalVisible(true)}>
                    <Text style = {styles.howToPlay}> How to Play?  </Text>
                    <Image style = {styles.infoIcon} source = {require('../../assets/info-icon.png')} />
                </TouchableOpacity>
            </View>
            
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
    // backtext : {
    //     marginTop : 20,
    //     fontSize : 14,
    //     paddingLeft : -20
    // },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
    centeredView : {
        height : '60%',
        width : '80%',
        borderWidth : 1,
        alignSelf : 'center',
        justifyContent : 'center',
        backgroundColor : '#ECECEC',
        marginTop : '30%',
        borderRadius : 10
    },
    modalView : {
        alignSelf : 'center'
    },
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
        //marginTop : 30,
        fontSize : 32,
        fontWeight : 'bold',
        alignSelf : 'center',
        marginBottom : 20
    },
    belowHeaderBox : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 30
    },
    howToPlayBlock : {
        flexDirection : 'row',
        marginTop : 15
    },
    infoIcon : {
        //marginLeft :5,
        width : 20,
        height : 20
    }
})

export default TopicHome;