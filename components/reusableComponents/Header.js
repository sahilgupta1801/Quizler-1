import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Modal} from 'react-native';

const { width } = Dimensions.get('window');

function Header(props) {

    const [modalVisible, setModalVisible] = useState(false);

    const openMenu = () => {
        props.navigation.openDrawer();
    }

    const prev = () => {
        props.navigation.goBack();
    }

    const goToAddCash = () => {
        //props.navigation.navigate('AddCash')
    }
    return (
        <View style = {styles.header} backgroundColor = {props.headerColor}>
            {
                props.hamburger ? 
                <TouchableOpacity onPress={openMenu}> 
                    <Image  source = {require('../../assets/hamburger.png')} style = {styles.hamburger} />          
                </TouchableOpacity>
                : 
                <TouchableOpacity onPress={prev}>
                    <Image source = {require('../../assets/left-arrow.png')} style = {styles.leftarrow}/>     
                </TouchableOpacity>
            }
            
            <Text style = {styles.heading}> {props.title} </Text>
            {
                props.wallet ?
                <TouchableOpacity onPress={() => setModalVisible(true)}> 
                    <Image  source = {require('../../assets/wallet.png')} style = {styles.wallet} />          
                </TouchableOpacity>
                : 
                <View>
                </View>
            }
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <View style = {styles.centeredView}>
                    <View style = {styles.totalBalanceBlock}>
                        <View style = {styles.totalBalanceLeft}>
                          <Text style = {styles.totalBalanceHead}> Total Balance : </Text>
                            <Text style = {styles.totalBalanceAmount}> Rs. 185 </Text>
                        </View>
                                
                        <TouchableOpacity style = {styles.addCashButton} onPress={() => goToAddCash()}>
                          <Text style = {styles.addCash}> Add Cash!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.partBlock}>
                        <View style = {styles.partLeft}>
                            <Text style = {styles.partHead}> Deposits </Text>
                            <Text style = {styles.partExp}> The amount added to wallet and is un-used </Text>
                        </View>
                        <Text style = {styles.partAmount}> Rs. 12 </Text>
                    </View>

                    <View style = {styles.partBlock}>
                        <View style = {styles.partLeft}>
                            <Text style = {styles.partHead}> Winnings </Text>
                            <Text style = {styles.partExp}> The amount won through contest </Text>
                        </View>
                        <Text style = {styles.partAmount}> Rs. 110 </Text>
                    </View>

                    <View style = {styles.partBlock}>
                        <View style = {styles.partLeft}>
                            <Text style = {styles.partHead}> Bonus </Text>
                            <Text style = {styles.partExp}> Can be used as 10% of the entry fee. </Text>
                        </View>
                        <Text style = {styles.partAmount}> Rs. 73 </Text>
                    </View>

                    <TouchableOpacity style = {styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Image style = {styles.closeIcon}  source = {require('../../assets/up-arrow.png')} />
                        <Text style = {styles.closeText}> Close </Text>
                    </TouchableOpacity>
                </View>
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
        //backgroundColor : '#CEA3FF',
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
        fontSize : 26,
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
        height : '40%',
        width : '100%',
        borderWidth : 1,
        alignSelf : 'center',
        backgroundColor : '#D9D9D9',
        marginTop : 100,
        borderBottomLeftRadius : 30,
        borderBottomRightRadius : 30
        },
        totalBalanceBlock : {
          marginTop : 20,
          flexDirection : 'row',
          justifyContent : 'space-around',
          alignItems : 'center',
          marginBottom : 30,
        },
        totalBalanceLeft : {
          justifyContent : 'center',
          flexDirection : 'row',
          alignItems : 'center'
        },    
        totalBalanceHead : {
          fontSize : 16,
        },
        totalBalanceAmount : {
          fontSize : 20,
          fontWeight : 'bold'
        },
        partBlock : {
          height : '15%',
          flexDirection : 'row',
          justifyContent : 'space-between',
          borderBottomWidth : 0.2,
          borderBottomColor : '#000000',
          marginTop : 10
        },
        partLeft : {
          marginLeft : 20,
          width : '70%'
        },
        partHead : {
          fontSize : 16, 
          fontWeight : 'bold'
        },
        partExp : {
          fontSize : 12,
        },
        partAmount : {
          fontSize : 18,
          fontWeight : 'bold',
          marginRight : 20
        },
        addCashButton : {
          height : 40,
          width : '30%',
          backgroundColor : 'green',
          justifyContent : 'center',
          alignItems : 'center',
          borderRadius : 5
        },
        addCash : {
          textAlign : 'center',
          color : 'white'
        },  
        closeButton : {
          alignSelf : 'center',
          marginTop : 20,
          width : '100%',
          flexDirection : 'row',
          justifyContent : 'center', 
        },
        closeIcon : {
          height : 30,
          width : 30,
          opacity : 0.5,
          marginRight : 5
        },
        closeText : {
          fontSize : 14,
          fontWeight : 'bold',
          marginTop : 5
        }
})
export default Header;