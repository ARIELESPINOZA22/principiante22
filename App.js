import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import Svg, {Path, Defs, LinearGradient,Stop}from 'react-native-svg'
//const {width, height}=Dimensions.get('window')


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ARES</Text>
      <Text style={styles.subtitulo}>system</Text>
      <TextInput
      placeholder="input name"
      style={styles.cajainput}
      />
      <TextInput
      placeholder="password"
      style={styles.cajainput}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:60,
    color: 'blue',
    fontWight:'bold',
  },
  subtitulo:{
    fontSize:30,
    color: 'blue',
    fontWight:'bold',
  },
  cajainput:{
   // borderWidth:2,
   // borderColor:'blue',
    padding: 10,
    width:'80%',
    marginTop: 10,
    borderRadius: 30,
    backgroundColor:'#fff',
  },

});
