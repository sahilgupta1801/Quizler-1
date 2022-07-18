import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Modal} from 'react-native';

const { width } = Dimensions.get('window');

function Header({navigation, title, hamburger, wallet}) {

    const [modalVisible, setModalVisible] = useState(false);

    const openMenu = () => {
        navigation.openDrawer();
    }

    const prev = () => {
        navigation.goBack();
    }

    const openWalletModal = () => {

    }
    return (
        <View style = {styles.header}>
            {
                hamburger ? 
                <TouchableOpacity onPress={openMenu}> 
                    <Image  source = {require('../../assets/hamburger.png')} style = {styles.hamburger} />          
                </TouchableOpacity>
                : 
                <TouchableOpacity onPress={prev}>
                    <Image source = {require('../../assets/left-arrow.png')} style = {styles.leftarrow}/>     
                </TouchableOpacity>
            }
            
            <Text style = {styles.heading}> {title} </Text>
            {
                wallet ?
                <TouchableOpacity onPress={() => setModalVisible(true)}> 
                    <Image  source = {require('../../assets/wallet.png')} style = {styles.wallet} />          
                </TouchableOpacity>
                : 
                <View>
                </View>
            }
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
                {/* Designing Left */}
            </Modal>
        </View>  
    );
}

const styles = StyleSheet.create({

    header : {
        flexDirection : 'row',
        //marginTop : 30,
        justifyContent : 'space-between' ,
        alignItems : 'center',
        height : 100,
        backgroundColor : '#CEA3FF',
        opacity : 1,
        borderBottomWidth : 1,
        width : width,
        //marginLeft : -20
    },
    hamburger : {
        alignSelf : 'flex-start',
        marginTop : 10,
        marginLeft : 30,
        height : 30,
        width : 30,
        marginRight : 10
    },
    leftarrow : {
        alignSelf : 'flex-start',
        marginTop : 10,
        marginLeft : 30,
        height : 30,
        width : 30
    },
    heading : {
        fontWeight : 'bold',
        fontSize : 30,
        marginTop : 10,
        //marginLeft : 10,
        alignSelf : 'center'
    },
    wallet : {
        height : 30,
        width : 30,
        marginRight : 40,
        marginTop : 10
    },
    centeredView : {
        height : '30%',
        width : '100%',
        borderWidth : 1,
        alignSelf : 'center',
        justifyContent : 'center',
        backgroundColor : '#ECECEC',
        marginTop : 100,
        borderBottomLeftRadius : 30,
        borderBottomRightRadius : 30
    },
    modalView : {
        alignSelf : 'center'
    },
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
})
export default Header;