import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';


const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
              <Post username="John Doe" text="Hello, world! #reactnative" />
              <Post username="James Bond" text="Having fun building apps with Expo!" />
              {/* Add more posts here */}
            </ScrollView>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
});

export default App;