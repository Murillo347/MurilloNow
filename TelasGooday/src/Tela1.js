import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Tela1 = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => { navigation.navigate("Greeting") }}>
      <Image
        source={require('../assets/logotipo.png')}
        style={styles.logo}
      />
    </TouchableOpacity>
  )
}

export default Tela1

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#14C871',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 100,
    width: 170,
    resizeMode: 'contain',
  },

  button: {
    color: 'black',
  },

});

