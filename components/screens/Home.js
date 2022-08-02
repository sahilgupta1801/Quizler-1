import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView,ImageBackground, Dimensions , Image, TextInput, StatusBar, Modal, TouchableOpacity} from 'react-native';
import HorizontalCarousal from '../reusableComponents/HorizontalCarousal';

import {genres, trendingCards, youmightLikeCards , allTopics, offers, userData} from '../../data/allDataVariables'
import { avatars } from '../../data/constants';
import WideTopic from '../reusableComponents/WideTopic';

const { width } = Dimensions.get('window');

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notifModalopen: false,
      walletModalopen : false
    };
    this.pressViewAll = this.pressViewAll.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.toggleNotifModal = this.toggleNotifModal.bind(this)
    this.toggleWalletModal = this.toggleWalletModal.bind(this)
    this.goToAddCash = this.goToAddCash.bind(this)
  }

pressViewAll(text) {
  var type = (text == 'Trending Topics') ? 1 : 2
  this.props.navigation.navigate('VerticalTopicDisplay', {heading : text , genres : 0, type : type})
}

pressViewAllGenres() {
  this.props.navigation.navigate('VerticalTopicDisplay', {heading : 'All Genres' , genres : 1, type : 3})
}

toggleOpen() {
  this.props.navigation.openDrawer();
}

toggleWalletModal() {
  this.setState({
    notifModalopen : false,
    walletModalopen : !this.state.walletModalopen
  });
}

toggleNotifModal() {
  this.setState({
    notifModalopen : !this.state.notifModalopen,
    walletModalopen : false,
  });
}

goToAddCash() {
  //this.props.navigation.navigate('AddCash')
}
    render() {

        var avatarSel = userData.avatarSel;
        var viewAll = 'View All > ';
        var notificationHeading = "Notifications & Offers";

      return (
        <View>
            <StatusBar hidden = {true} />

            <View style = {styles.topBar} >
                <TouchableOpacity style = {styles.profileIcon} onPress={this.toggleOpen}>
                    <Image style = {styles.avatar} source = {avatars[avatarSel]}/>
                    <Image style = {styles.hamburger} source = {require('../../assets/hamburger.png')} />
                </TouchableOpacity>
                <Text style= {styles.bannerText}> Quizler! </Text>
                <View style ={styles.icons}>
                    <TouchableOpacity onPress={this.toggleNotifModal}>
                        <Image style = {styles.notif} source = {require('../../assets/notif-icon.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toggleWalletModal}>
                        <Image style = {styles.wallet} source = {require('../../assets/wallet.png')} ></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.walletModalopen}
              onRequestClose={ () => 
              this.toggleWalletModal()
              }
            >
              <View style = {styles.centeredView}>
                <View style = {styles.totalBalanceBlock}>
                    <View style = {styles.totalBalanceLeft}>
                      <Text style = {styles.totalBalanceHead}> Total Balance : </Text>
                      <Text style = {styles.totalBalanceAmount}> Rs {userData.depositBalance + userData.winningsBalance + userData.bonusBalance} </Text>
                    </View>
                                
                    <TouchableOpacity style = {styles.addCashButton} onPress={this.goToAddCash}>
                      <Text style = {styles.addCash}> Add Cash!</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.partBlock}>
                  <View style = {styles.partLeft}>
                    <Text style = {styles.partHead}> Deposits </Text>
                    <Text style = {styles.partExp}> The amount added to wallet and is un-used </Text>
                  </View>
                  <Text style = {styles.partAmount}> Rs. {userData.depositBalance} </Text>
                </View>

                <View style = {styles.partBlock}>
                  <View style = {styles.partLeft}>
                    <Text style = {styles.partHead}> Winnings </Text>
                    <Text style = {styles.partExp}> The amount won through contest </Text>
                  </View>
                  <Text style = {styles.partAmount}> Rs. {userData.winningsBalance} </Text>
                </View>

                <View style = {styles.partBlock}>
                  <View style = {styles.partLeft}>
                    <Text style = {styles.partHead}> Bonus </Text>
                    <Text style = {styles.partExp}> Can be used as 10% of the entry fee. </Text>
                  </View>
                  <Text style = {styles.partAmount}> Rs. {userData.bonusBalance} </Text>
                </View>

                <TouchableOpacity style = {styles.closeButton} onPress={this.toggleWalletModal}>
                  <Image style = {styles.closeIcon}  source = {require('../../assets/up-arrow.png')} />
                  <Text style = {styles.closeText}> Close </Text>
                </TouchableOpacity>
              </View>
            </Modal>


            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.notifModalopen}
              onRequestClose={() => {
              this.toggleNotifModal()
              }}
            >
              <View style={styles.centeredViewNotif}>
                  <View style = {styles.notifHeadingBlock}>
                    <Text style = {styles.notifHeading}> {notificationHeading} </Text>
                    <Text style = {styles.notifViewall}> {viewAll} </Text>
                  </View>

                  <ScrollView 
                    ref={(scrollView) => { this.scrollView = scrollView; }}
                    style={styles.notifScroll}
                    //pagingEnabled={true}
                    horizontal= {true} 
                    decelerationRate={0}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 30,
                    }}>
                      {
                        offers.map((item,index) => {
                          return (
                            <View style = {styles.notifCard} key = {index}>
                                <Image style = {styles.notifImage} resizeMode='contain' source = {require('../../assets/GOT.png')} />
                            </View>
                          )
                        })
                      }
                    </ScrollView>

                  <TouchableOpacity style = {styles.closeButton} onPress={this.toggleNotifModal}>
                    <Image style = {styles.closeIcon}  source = {require('../../assets/up-arrow.png')} />
                    <Text style = {styles.closeText}> Close </Text>
                  </TouchableOpacity>
              </View>
            </Modal>


            <ScrollView> 
              <View style = {styles.trendingLine}>
                <Text style = {styles.trendingnow}> Trending Now !</Text> 
                <TouchableOpacity onPress={() => this.pressViewAll('Trending Topics')}>
                  <Text style = {styles.viewall}> {viewAll} </Text>
                </TouchableOpacity>
              </View>
              <HorizontalCarousal type = {1} image = 'F1' cards = {trendingCards}/>

              <View style = {styles.mightLikeLine}> 
                <Text style = {styles.youmightlike}> You Might Like!</Text>
                <TouchableOpacity onPress={() => this.pressViewAll('You Might Like!')}>
                  <Text style = {styles.viewall}> {viewAll} </Text>
                </TouchableOpacity>
              </View>
              <HorizontalCarousal type = {1} image = 'Chelsea' cards = {youmightLikeCards} />
            
              <View style = {styles.GenreLine}>
                <Text style = {styles.genres}> Genres </Text>
                <TouchableOpacity onPress={() => this.pressViewAllGenres('Genres!')}>
                  <Text style = {styles.viewall}> {viewAll} </Text>
                </TouchableOpacity>
              </View>
              <HorizontalCarousal type = {0} image = 'Chelsea' cards = {genres} />
              
              <View style = {styles.allTopicsLine}>
                <Text style = {styles.allTopics}> All Topics ! </Text>
                <TextInput
                  style = {styles.topicsTextInput}
                  placeholder='Search Topic..'
                  >
                </TextInput>
              </View>
              
              {
                  allTopics.map((item, index) => {
                      return (
                          <WideTopic key={index} height ={50} text = {item.text} color = {item.color} margin = {10} onClick = {'TopicScreen'} type = {5} />
                      )
                  })
              }
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  animatedBox : {
    width : width*0.6,
    borderRightColor : '#000000',
    borderRightWidth : 2,
    height : '100%',
    backgroundColor : '#FFFFFF'
  },
  container: {
    overlayColor : 0.2,
  },
  sideDrawer : {
    justifyContent : 'center',
    width : '75%',
    height : '100%',
    borderRightWidth : 1,
    borderRightColor : '#000000',
    backgroundColor : '#DEDEDE',
  },
  closeWrapper : {
      justifyContent : 'center',
      height : 40,
      width : '100%',
      borderColor : '#FFFFFD',
      borderWidth : 2
  },
  close : {
    fontWeight : 'bold',
    alignSelf : 'center'
  },
  profileIcon : {
    flexDirection : 'row',
    paddingLeft : width* 0.05,
    marginTop : 10,
  },
  avatar : {
    height : 70,
    width : 70,
  },
  hamburger : {
    height : 25,
    width : 25,
    marginTop : 50,
    marginLeft : -15
  },
  topBarBackGround : {
    height : 110,
    width : '100%',
    
  },
  icons : { 
      flexDirection : 'row',
      paddingLeft : width* 0.1,
      marginTop : 10,
    },
  topBar : {
      flexDirection : 'row',
      borderBottomColor : '#000',
      borderBottomWidth : 1,
      height : 110,
      alignItems : 'center',
      backgroundColor : '#A865C9',
    },
  notif : {
      height : 30,
      width : 30,
      marginRight : 15
  },
  wallet : {
      paddingLeft : 10,
      height : 30,
      width : 30
  },
  bannerText : {
      marginTop : 10,
      fontSize : 30,
      fontWeight : 'bold',
      alignSelf :'center',
      paddingLeft : width*0.1,
    //fontFamily : 'sans-serrif'
  },
  trendingnow : {
    fontWeight : 'bold',
    fontSize : 18,
    paddingTop : 15,
    paddingLeft : 10
  },
  trendingLine : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 0,
  },
  mightLikeLine : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 0
  },
  GenreLine : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  viewall : {
      paddingTop : 18,
      alignSelf : 'flex-end',
      paddingRight : 15
  },
  youmightlike : {
    fontWeight : 'bold',
    fontSize : 18,
    paddingTop : 15,
    paddingLeft : 10
  },
  genres : {
      marginTop : 15,
      fontSize : 18,
      fontWeight : 'bold',
      marginLeft : 10,
      marginBottom : 10
  },
  allTopics : {
    fontSize : 18,
    fontWeight : 'bold',
    marginLeft : 10,
    marginBottom : 10,
    marginTop : 5
  },
  allTopicsLine : {
    marginTop : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  topicsTextInput : {
    marginRight : 25,
    borderWidth : 0.5,
    borderRadius : 10,
    height : 30,
    width : '50%',
    textAlign : 'center'
  },
  centeredView : {
    height : '40%',
    width : '100%',
    borderWidth : 1,
    alignSelf : 'center',
    backgroundColor : '#D9D9D9',
    marginTop : 110,
    borderBottomLeftRadius : 30,
    borderBottomRightRadius : 30
    },
    centeredViewNotif : {
      height : '25%',
      width : '100%',
      borderWidth : 1,
      alignSelf : 'center',
      backgroundColor : '#D9D9D9',
      marginTop : 110,
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
    },
    notifScroll : {

    },
    notifHeadingBlock : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      marginTop : 20,
      marginBottom : 20
    },
    notifHeading : {
      marginLeft : 10,
      fontSize : 16,
      fontWeight : 'bold'
    },
    notifViewall : {
      marginRight : 10,
      fontSize : 14,
      fontWeight : 'bold'
    },
    notifCard : {
      marginLeft : 10,
      height : 100
    },
    notifImage : {
        width: width*0.9,
        height: 100,
        borderRadius: 10,
    }
});