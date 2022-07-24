import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native'
import Header from '../reusableComponents/Header';

function VerifyKYC(props) {
    return (
        <View style = {styles.container}>
            <Header navigation={props.navigation} title ={'KYC Verification'} hamburger={0} wallet={0} />

            <View style = {styles.status}>
                <Text style = {styles.statusText}> KYC Verified! </Text>
            </View>

            {/* Get user to upload a file
            Tex input of their PAN number
            Send both to server 
             */}

        </View>
    );
}

const styles = StyleSheet.create({
    container : {

    },

})

export default VerifyKYC;