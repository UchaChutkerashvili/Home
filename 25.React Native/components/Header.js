import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Facebook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b5998',
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
});

export default Header;