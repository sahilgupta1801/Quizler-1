import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/screens/Home";
import TopicHome from "../components/screens/TopicHome";
import VerticalTopicDisplay from "../components/screens/VerticalTopicDisplay";
import Matchmaking from '../components/screens/Matchmaking';
import Header from "../components/reusableComponents/Header";

const screens = {
    Home: {
        screen : Home,
        navigationOptions : {
            headerShown : false,
        },
    },
    TopicScreen : {
        screen : TopicHome,
        navigationOptions : {
            headerShown : false,
        },
    },
    VerticalTopicDisplay : {
        screen : VerticalTopicDisplay,
        navigationOptions : {
            headerShown : false,
        },
    },
    Matchmaking : {
        screen : Matchmaking,
        navigationOptions : {
            headerShown : false,
        },
    },
    // AddCash : {
    //     screen : AddCash,
    //     navigationOptions : {
    //         headerShown : false,
    //     }
    // }
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;