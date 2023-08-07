import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© {new Date().getFullYear()} Facebook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b5998',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: 'white',
  },
});

export default Footer;