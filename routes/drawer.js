import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import profileStack from "./profileStack";
import walletStack from "./walletStack";

const RootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : HomeStack,
    },
    Profile : {
        screen : profileStack
    },
    Wallet : {
        screen : walletStack
    }
});

export default createAppContainer(RootDrawerNavigator);