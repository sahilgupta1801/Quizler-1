import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Login from './components/screens/Login';
import Register from './components/screens/Register'
import Home from './components/screens/Home'
import TopicHome from './components/screens/TopicHome';
import Matchmaking from './components/screens/Matchmaking';
import MatchFound from './components/screens/MatchFound';
import InGame from './components/screens/InGame';
import GameEnd from './components/screens/GameEnd';
import Wallet from './components/screens/Wallet';
import Profile from './components/screens/Profile';
import GameHistory from './components/screens/GameHistory';
import VerticalTopicDisplay from './components/screens/VerticalTopicDisplay';
import TopSheet from './components/reusableComponents/TopSheet';
import Navigator from './routes/drawer';


export default function App() {
  return (
      <Navigator/>
  );
}



