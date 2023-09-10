import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        placeholderTextColor="white"
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />

      {/* Image (positioned in the left corner of the upper area) */}
      <Image
        source={require('../../assets/block2.jpg')}
        style={styles.image}
      />

      {/* Content */}
      <Text style={{ color: 'white' }}>hum tere bin ab reh nhi</Text>
      <Text style={{ color: 'white' }}>nice to meet you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  searchBox: {
    width: '100%',
    height: 50,
    top: 40,
    left:20,
    backgroundColor: '#F0EEEE',
    borderWidth: 4,
    borderColor: '#ccc',
    borderRadius: 9,
    paddingLeft: 130,
    marginBottom: 60,
    color: 'white',
  },
  image: {
    position: 'absolute',
    top: 30,
    left: -80,
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
});

export default Home;
