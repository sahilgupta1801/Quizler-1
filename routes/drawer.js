import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import profileStack from "./profileStack";
import walletStack from "./walletStack";
import VerifyKYC from "../components/screens/VerifyKYC";
import AboutUs from "../components/screens/AboutUs";
import HowToPlay from "../components/screens/HowToPlay";
import PointsSystem from "../components/screens/PointsSystem";
import TermsConditions from "../components/screens/TermsConditions";
import ComingUp from "../components/screens/ComingUp";

const RootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : HomeStack,
    },
    Profile : {
        screen : profileStack
    },
    Wallet : {
        screen : walletStack
    },
    'Verify KYC' : {
        screen : VerifyKYC
    },
    'How to Play' : {
        screen : HowToPlay
    },
    'Points System' : {
        screen : PointsSystem
    },
    'About Us' : {
        screen : AboutUs
    },
    'Terms and Conditions' : {
        screen : TermsConditions
    },
    'Coming Up' : {
        screen : ComingUp
    }
});

export default createAppContainer(RootDrawerNavigator);