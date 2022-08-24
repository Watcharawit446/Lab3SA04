import { StatusBar } from 'expo-status-bar';
import Weather from './components/Weather';
import { StyleSheet, View } from 'react-native';
import React from 'react';


export default function App() {
 
  return (
    <View style={styles.container}>
      <Weather zipCode="90110"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25
  },
});

