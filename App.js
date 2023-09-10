import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/home';


export default function App() {
  return (
    <View style={styles.container}>
    


      <Home/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f70bb',
    alignItems: 'center',
    justifyContent: 'center',
  },




});
