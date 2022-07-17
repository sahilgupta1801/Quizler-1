import React, {Component} from 'react';
import MenuDrawer from 'react-native-side-drawer'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'


export default class SideDrawer extends Component{

    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
      }

    toggleOpen = () => {
        console.log('Hello')
        this.setState({ open: !this.state.open });
      };

    drawerContent = () => {
        return (
          <View style = {styles.sideDrawer}>
        <TouchableOpacity style = {styles.closeWrapper} onPress={this.toggleOpen}>
          <Text style = {styles.close}> Close </Text>
        </TouchableOpacity>
        </View>
        );
    };
    render () {
        return (
            <MenuDrawer
                open={this.state.open && this.props.open}
                position={'left'}
                drawerContent={this.drawerContent()}
                drawerPercentage={100}
                animationTime={250}
                overlay={true}
                opacity={0}
            >
                {/* <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
                    <Text>Open</Text>
                </TouchableOpacity> */}
            </MenuDrawer>
        );
    }
    
}

const styles = StyleSheet.create({
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
})