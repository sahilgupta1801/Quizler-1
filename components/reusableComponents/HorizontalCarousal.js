import React,{Component} from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions , Image} from 'react-native';
import TopicCard from './TopicCard';
import GenreCard from './GenreCard'

const { width } = Dimensions.get('window');

export default class HorizontalCarousal extends Component {
  
    componentDidMount() {
          setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
      }
    render() {
        return (
        <ScrollView 
                ref={(scrollView) => { this.scrollView = scrollView; }}
                style={styles.container}
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
                this.props.type ? 

                    this.props.cards.map((item,index) => {
                        return (
                            <TopicCard type = {this.props.type} image = {this.props.image} key = {index} color = {item.color} text = {item.text} />
                        )
                    })
                : 
                    this.props.cards.map((item,index) => {
                        return (
                            < GenreCard type = {this.props.type} image = {this.props.image} key = {index} color = {item.color} text = {item.text} />
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {}
})

