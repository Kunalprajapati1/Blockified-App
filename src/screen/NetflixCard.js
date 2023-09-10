import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking, ScrollView } from "react-native";

const NetflixCard = () => {
  const commonImageUrl = require('../../assets/ncat.png'); // Use the same image for all cards

  const cardsData = [
    {
      title: "NCAT SKILL APPRECIATION",
     
      imageUrl: commonImageUrl,
      url: "https://instagram.com/need4need_?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      title: "",
      
      imageUrl: commonImageUrl,
      url: "https://instagram.com/need4need_?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      title: "",
    
      imageUrl: commonImageUrl,
      url: "https://instagram.com/need4need_?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      title: "",
     
      imageUrl: commonImageUrl,
      url: "https://instagram.com/need4need_?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      title: "",
      
      imageUrl: commonImageUrl,
      url: "https://instagram.com/need4need_?igshid=OGQ5ZDc2ODk2ZA==",
    },
  ];

  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      {cardsData.map((card, index) => (

        <View key={index} style={styles.card}>

          <Text style={styles.header}>Certificates We Issue</Text>

          <View style={styles.poster}>

            <Image style={styles.imgStyle} source={card.imageUrl} />

            <View style={styles.poster__info}>


              <Text style={styles.poster__title}>{card.title}</Text>

              
              <Text style={styles.poster__text}>{card.description}</Text>
            </View>
           
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical:20,
    paddingHorizontal: 15,
  },
  card: {
    marginRight: 20, // Add margin to separate cards horizontally
    borderWidth: 0, // Decreased border width to make it thinner for mobile screens
    borderRadius: 20,
    borderColor: '#35374fef',
    backgroundColor: '#262B61',
    width: 280, 
    height:190,
  },
  header: {
    fontSize: 20,
    marginBottom: 5,
    marginTop:5,
    color: "white",
    textAlign:"center"
  },
  poster: {
    alignItems: "center",
    
  },
  poster__info: {
    alignItems: "center",
    marginVertical: 10,
    color: "white",
  },
  poster__title: {
    fontSize: 20,
    marginBottom: 10,
    color: "white",
  },
  poster__text: {
    color: "white",
    paddingHorizontal: 0,
    marginBottom: 10,
  },
  imgStyle: {
    width: 200,
    height: 150,
    borderRadius: 20,
  },
});

export default NetflixCard;
