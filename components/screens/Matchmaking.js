import React,{Component} from 'react';
import {View , Dimensions , Text, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';

const { width } = Dimensions.get('window');

export default class Matchmaking extends Component {
    
    componentDidMount() {
        setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
    }
    render() {
        
    var backText = '< Back To Lobby'
    var images = [{id : '../../assets/avatar1.png'},
                  {id : '../../assets/avatar2.png'},
                  {id : '../../assets/avatar3.png'},
                  {id : '../../assets/avatar4.png'},
                  {id : '../../assets/avatar5.png'},
                  {id : '../../assets/avatar6.png'},
                  {id : '../../assets/avatar7.png'},
                  {id : '../../assets/avatar8.png'}]
    return (
        <View>
            <TouchableOpacity style = {styles.backToLobby}>
                <Text style = {styles.backToLobbyText}>
                      {backText}
                </Text>
            </TouchableOpacity>

            <View style= {styles.aboveAvatar}>
                <Text style = {styles.prizePool}> Prize Pool : Rs 45 </Text>
                <Text style = {styles.findingMatch}> Finding Your Opponent : </Text>
            </View>
            <View style = {styles.avatarView}>
                <Image style = {styles.avatar} source = {require('../../assets/avatar1.png')} />
                <Text style = {styles.userName}> Sahil Gupta </Text>
                <Text style = {styles.userLocation}> India </Text>
            </View>

            <ScrollView 
                ref={(scrollView) => { this.scrollView = scrollView; }}
                style={styles.container}
                //pagingEnabled={true}
                horizontal= {true}
                decelerationRate={1}
                focusable = {false}
                
                snapToInterval={width - 60}
                snapToAlignment={"center"}
                contentInset={{
                    top: 0,
                    left: 30,
                    bottom: 0,
                    right: 30,
                }}>
                {
                images.map((item,index) => {
                    console.log(item.id)
                    return (
                        <Image style = {styles.avImages} source = {require('../../assets/avatar7.png')} />
                    )
                })
                }
            </ScrollView>



        </View>
    );
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop : 120,
        marginLeft : 20,
        marginRight : 30
    },
    avImages : {
        height : 70,
        width : 70
    },
    backToLobby : {
        alignSelf : 'flex-start',
        marginTop : 60,
        marginLeft : 30
    },
    backToLobbyText : {
        fontSize : 24,
        fontWeight : 'bold',
    },
    aboveAvatar : {
        alignSelf : 'center',
        marginTop : 70
    },
    prizePool : {
        fontWeight : 'bold',
        fontSize : 30,
    },
    findingMatch : {
        marginTop : 15,
        fontSize : 20,
        alignSelf : 'center',
        fontWeight : 'bold'
    },
    avatar : {
        marginTop : 50,
        alignSelf : 'center'
    },
    userName : {
        marginTop : 15,
        fontWeight : 'bold',
        fontSize : 20,
        alignSelf : 'center'
    },
    userLocation : {
        marginTop : 5,
        fontWeight : 'bold',
        fontSize : 20,
        alignSelf : 'center'
    }
});