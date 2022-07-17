import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView,ImageBackground, Dimensions , Image, TextInput, StatusBar} from 'react-native';
import HorizontalCarousal from '../reusableComponents/HorizontalCarousal';

import { TouchableOpacity } from 'react-native';
import WideTopic from '../reusableComponents/WideTopic';
import MenuDrawer from 'react-native-side-drawer'
import Register from './Register';
import TopSheet from '../reusableComponents/TopSheet';
import VerticalTopicDisplay from './VerticalTopicDisplay';
//import VerticalGenreDisplay from './VerticalGenreDisplay';

const { width } = Dimensions.get('window');

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.pressViewAll = this.pressViewAll.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
  }

pressViewAll(text) {
  this.props.navigation.navigate('VerticalTopicDisplay', {heading : text})
}

pressViewAllGenres() {
  this.props.navigation.navigate('VerticalGenreDisplay')
}

toggleOpen() {
  this.props.navigation.openDrawer();
}

  // openTopSheet = () => {
  //   console.log('Wallet Hello')
  //   return <TopSheet />
  // }

    render() {
        var trendingCards = [{color : 'pink', text : 'F1'},{color : '#Add8E6', text : 'Chelsea'},
        {color : 'pink', text : 'IPL'},{color : 'pink', text : 'F.R.I.E.N.D.S'},
        {color : '#Add8e6', text : 'Game of Thrones'}];

        var youmightLikeCards = [{color : '#Add8e6', text : 'F.R.I.E.N.D.S'},{color : 'pink', text : 'Game of Thrones'},
        {color : '#Add8e6', text : 'F1'},{color : 'pink', text : 'Chelsea'},
        {color : '#Add8e6', text : 'IPL'}];

        var genres = [
            {color : '#Add8e6', text : 'TV Shows'}, {color : 'yellow', text : 'Football'},
            {color : 'pink', text : 'Movies'}, {color : '#Add8e6', text : 'Cricket'},
            {color : 'yellow', text : 'F1'}, {color : 'pink', text : 'History'}];

        var allTopics = [
            {color : '#Add8e6', text : 'Chelsea'}, {color : 'yellow', text : 'Game of Thrones'},
            {color : 'pink', text : 'F.R.I.E.N.D.S'}, {color : '#Add8e6', text : 'IPL 2022'},
            {color : 'yellow', text : 'L.A Lakers'} , {color : 'pink', text : 'F1'},
            {color : '#Add8e6', text : 'Manchester United'}, {color : 'yellow', text : 'Liverpool'},
            {color : 'pink', text : 'Harry Potter'}, {color : '#Add8e6', text : 'Premier League'},
            {color : 'pink', text : 'Bollywood'}, {color : 'yellow', text : 'Champions League'}];

        var viewAll = 'View All > ';

      return (
        <View>
            <StatusBar hidden = {true} />

            <View style = {styles.topBar} >
                <TouchableOpacity style = {styles.profileIcon} onPress={this.toggleOpen}>
                    <Image style = {styles.avatar} source = {require('../../assets/avatar1.png')}/>
                    <Image style = {styles.hamburger} source = {require('../../assets/hamburger.png')} />
                </TouchableOpacity>
                <Text style= {styles.bannerText}> Quizler! </Text>
                <View style ={styles.icons}>
                    <TouchableOpacity>
                        <Image style = {styles.notif} source = {require('../../assets/notif-icon.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style = {styles.wallet} source = {require('../../assets/wallet.png')} ></Image>
                    </TouchableOpacity>
                </View>
            </View>

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
                          <WideTopic key={index} height ={50} text = {item.text} color = {item.color}/>
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
    //   fontFamily : 'sans-serrif'
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
    marginTop : 0
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
  }
});