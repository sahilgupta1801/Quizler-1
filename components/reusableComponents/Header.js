import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

function Header({navigation, title, hamburger, wallet}) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    const prev = () => {
        navigation.goBack();
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
                <TouchableOpacity onPress={openMenu}> 
                    <Image  source = {require('../../assets/wallet.png')} style = {styles.wallet} />          
                </TouchableOpacity>
                : 
                <View>

                </View>
            }
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
    }
})
export default Header;