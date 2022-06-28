import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Login from './components/screens/Login';
import Register from './components/screens/Register'
import Home from './components/screens/Home'
import TopicHome from './components/reusableComponents/TopicHome';
import Matchmaking from './components/screens/Matchmaking';

export default function App() {
  return (
    <Matchmaking/>
  );
}


