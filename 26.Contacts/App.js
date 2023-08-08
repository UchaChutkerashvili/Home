import React from 'react';
import { StyleSheet, View, FlatList, Text ,TextInput } from 'react-native';
import { firstNames, lastNames } from './contacts';

 
const random100FirstNames = firstNames.slice(0, 100);
const random100LastNames = lastNames.slice(0, 100);

const generateRandomName = () => {
  const randomFirstName = random100FirstNames[Math.floor(Math.random() * random100FirstNames.length)];
  const randomLastName = random100LastNames[Math.floor(Math.random() * random100LastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
};

const App = () => {
  const [namesList, setNamesList] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');

  const generateNames = () => {
    const newNames = [];
    for (let i = 0; i < 100; i++) {
      newNames.push(generateRandomName());
    }
    setNamesList(newNames);
  };

  React.useEffect(() => {
    generateNames();
  }, []);

  const filteredNames = namesList.filter(name => name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search names..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        data={filteredNames}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 8,
  },
  item: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
    color: '#333333',
  },
});

export default App;
