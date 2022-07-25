import React, {useState} from 'react';

import {View,Text, StyleSheet, Image, Modal, TouchableOpacity} from 'react-native'; 
import ContestCard from '../reusableComponents/ContestCard';
import Header from '../reusableComponents/Header';
import { contests } from '../../data/allDataVariables';
import {withNavigation} from 'react-navigation';

function TopicHome({navigation}) {

    const goToAddCash = () => {
        //navigation.navigate('AddCash')
    }

    const [modalVisible, setModalVisible] = useState(false);

    var back = '<';
    const heading  = navigation.state.params.heading;
    const color = navigation.state.params.color;

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title = {heading} hamburger={0} wallet={1} headerColor ={color}/>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style = {styles.centeredView}>
                    
                    </View>
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
                        currentOnline={item.currentOnline} color = {color}
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