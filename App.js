import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Video from 'react-native-video'

export default function App() {
  return (
      <View style={styles.container}>
        <Content/>
        <Footer/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
