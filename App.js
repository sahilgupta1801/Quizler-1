import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Login from './components/screens/Login';
import Register from './components/screens/Register'
import Home from './components/screens/Home'
import Navigator from './routes/drawer';


export default function App() {
  return (
      <Navigator/>
  );
}



