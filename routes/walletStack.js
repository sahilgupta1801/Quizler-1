import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import TransactionHistory from "../components/screens/TransactionHistory";
import Wallet from "../components/screens/Wallet";

const screens = {
    Wallet : {
        screen : Wallet,
        navigationOptions : {
            headerShown : false,
        },
    },
    TransactionHistory : {
        screen : TransactionHistory,
        navigationOptions : {
            headerShown : false,
        },
    },
    // AddCash : {
    //     screen : AddCash,
    //     navigationOptions : {
    //         headerShown : false,
    //     },
    // },
    // WithdrawCash : {
    //     screen : WithdrawCash,
    //     navigationOptions : {
    //         headerShown : false,
    //     },
    // },
    // ManagePayments : {
    //     screen : ManagePayments,
    //     navigationOptions : {
    //         headerShown : false,
    //     }
    // },
    // KYCVerify : {
    //     screen : VerifyKYC,
    //     navigationOptions : {
    //         headerShown : false,
    //     }
    // },
}

const walletStack = createStackNavigator(screens);

export default walletStack;