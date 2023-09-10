import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import NetflixCard from './NetflixCard';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
       <Image
        source={require('../../assets/block2.jpg')}
        style={styles.image}
      />
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        placeholderTextColor="white"
        textAlign="left"
       
        
        //onChangeText={text => setSearchText(text)}
        //value={searchText}
      />

      {/* Image (positioned in the left corner of the upper area) */}
     




     <NetflixCard/>
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
    top: 45,
    left:20,
    backgroundColor: '#f0eeee7d',
    borderWidth: 4,
    borderColor: '#ccc',
    borderRadius: 9,
    paddingLeft: 130,
    marginBottom: 60,
    color: 'white',
    
  },
  placeholder: {
    textAlign: "left", 
  },




  image: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
});

export default Home;
