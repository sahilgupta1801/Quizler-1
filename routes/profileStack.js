import { createStackNavigator } from "react-navigation-stack";
import GameHistory from "../components/screens/GameHistory";

import Profile from "../components/screens/Profile";
import TransactionHistory from "../components/screens/TransactionHistory";
import VerifyKYC from "../components/screens/VerifyKYC";

const screens = {
    Profile : {
        screen : Profile,
        navigationOptions : {
            headerShown : false,
        },
    },
    GameHistory : {
        screen : GameHistory,
        navigationOptions : {
            headerShown : false,
        }
    },
    TransactionHistory : {
        screen : TransactionHistory,
        navigationOptions : {
            headerShown : false,
        }
    },
    // Analytics : {
    //     screen : Analytics,
    //     navigationOptions : {
    //         headerShown : false,
    //     }
    // },
    KYCVerify : {
        screen : VerifyKYC,
        navigationOptions : {
            headerShown : false,
        }
    },
}

const profileStack = createStackNavigator(screens);

export default profileStack;