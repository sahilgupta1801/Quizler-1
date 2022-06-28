import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView,ImageBackground, Dimensions , Image, StatusBar} from 'react-native';
import HorizontalCarousal from '../reusableComponents/HorizontalCarousal';
import DoubleCard from '../reusableComponents/DoubleCard'
import { TouchableOpacity } from 'react-native';
import WideTopic from '../reusableComponents/WideTopic';

const { width } = Dimensions.get('window');

export default class Home extends Component {

    render() {
        var trendingCards = [{color : 'pink', text : 'F1'},{color : '#Add8E6', text : 'Chelsea'},
        {color : 'pink', text : 'IPL'},{color : 'pink', text : 'F.R.I.E.N.D.S'},
        {color : '#Add8e6', text : 'Game of Thrones'}];

        var youmightLikeCards = [{color : '#Add8e6', text : 'F.R.I.E.N.D.S'},{color : 'pink', text : 'Game of Thrones'},
        {color : '#Add8e6', text : 'F1'},{color : 'pink', text : 'Chelsea'},
        {color : '#Add8e6', text : 'IPL'}];

        var genres = [
            {color1 : '#Add8e6', text1 : 'TV Shows', color2 : 'yellow', text2 : 'Football'},
            {color1 : 'pink', text1 : 'Movies', color2 : '#Add8e6', text2 : 'Cricket'},
            {color1 : 'yellow', text1 : 'F1' , color2 : 'pink', text2 : 'History'}];

        var allTopics = [
            {color1 : '#Add8e6', text1 : 'Chelsea', color2 : 'yellow', text2 : 'Game of Thrones'},
            {color1 : 'pink', text1 : 'F.R.I.E.N.D.S', color2 : '#Add8e6', text2 : 'IPL 2022'},
            {color1 : 'yellow', text1 : 'L.A Lakers' , color2 : 'pink', text2 : 'F1'},
            {color1 : '#Add8e6', text1 : 'Manchester United', color2 : 'yellow', text2 : 'Liverpool'},
            {color1 : 'pink', text1 : 'Harry Potter', color2 : '#Add8e6', text2 : 'Premier League'},
            {color1 : 'pink', text1 : 'Bollywood' , color2 : 'yellow', text2 : 'Champions League'}];

        var viewAll = 'View All > ';

      return (
        <View>
            <StatusBar hidden = {true} />
            <View style = {styles.topBar}>
                {/* <Image style = {styles.topBarBackGround} source = {require('../../assets/Quizler.png')} resizeMode='stretch'/>  */}
                <TouchableOpacity style = {styles.profileIcon}>
                    <Image style = {styles.avatar} source = {require('../../assets/avatar1.png')}/>
                    <Image style = {styles.hamburger} source = {require('../../assets/hamburger.png')} />
                </TouchableOpacity>
                <Text style= {styles.bannerText}> Quizler! </Text>
                <View style ={styles.icons}>
                    <TouchableOpacity>
                        <Image style = {styles.notif} source = {require('../../assets/notif-icon.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style = {styles.wallet} source = {require('../../assets/wallet.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView> 
            <View style = {styles.TitleLine}>
            <Text style = {styles.trendingnow}> Trending Now !</Text> 
            <Text style = {styles.viewall}> {viewAll} </Text>
            </View>
            <HorizontalCarousal image = 'F1' cards = {trendingCards}/>

            <View style = {styles.TitleLine}>
            <Text style = {styles.youmightlike}> You Might Like!</Text>
            <Text style = {styles.viewall}> {viewAll} </Text>
            </View>
            <HorizontalCarousal image = 'Chelsea' cards = {youmightLikeCards} />

            <Text style = {styles.genres}> Genres </Text>
            {
                genres.map((item,index) => {
                    return (
                        <DoubleCard key = {index} text1 = {item.text1} color1 = {item.color1} text2 = {item.text2} color2 = {item.color2} />
                    )
                })
            }

            <Text style = {styles.genres}> All Topics ! </Text>
            {
                allTopics.map((item, index) => {
                    return (
                        <WideTopic key={index} text1 = {item.text1} color1 = {item.color1} text2 = {item.text2} color2 = {item.color2}/>
                    )
                })
            }
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
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
    width : '100%'
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
      backgroundColor : '#A865C9'
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
  TitleLine : {
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
      paddingTop : 15,
      fontSize : 18,
      fontWeight : 'bold',
      paddingLeft : 10,
      marginBottom : 10
  }
});