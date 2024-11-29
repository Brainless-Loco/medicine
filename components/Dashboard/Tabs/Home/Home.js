import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/icon.png')} // Replace with your logo path
          
          style={styles.logo}
        />
      </View>

      {/* Two Big Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Categories')}
        >
          <Text style={styles.buttonText}>Our All Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LatestProducts')}
        >
          <Text style={styles.buttonText}>To Make Order</Text>
        </TouchableOpacity>
      </View>

      {/* Latest Updates Box */}
      <View style={styles.updatesContainer}>
        <Text style={styles.sectionTitle}>Latest Updates</Text>
        <View style={styles.updateBox}>
          {[
            { text: '❄️ Health tips on constipation', date: '20th Dec, 2024' },
            { text: '🧬 New product launch: Colistimethate', date: '21st Nov, 2024' },
            { text: '👶🏻 Discounts on baby care products', date: '1st Nov, 2024' },
          ].map((update, index) => (
            <View key={index} style={styles.updateItem}>
              <Text style={styles.updateText}>{update.text}</Text>
              <Text style={styles.updateDate}>{update.date}</Text>
            </View>
          ))}
          {/* <TouchableOpacity style={styles.seeMoreBtn}>
              <Text style={styles.seeMoreBtnText}>See more</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 16,
    backgroundColor: '#fff',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop:40
  },
  logo: {
    // width: 100,
    height: 60,
    aspectRatio: 3.29
  },
  buttonContainer: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    width: 250,
    backgroundColor: '#004eb3',
    padding: 15,
    margin: 8,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  updatesContainer: {
    marginBottom: 20,
    paddingTop: 16,
    width:'90%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    // backgroundColor:'red'
  },
  sectionTitle: {
    color:'#004eb3',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center",
  },
  updateBox: {
    backgroundColor: '#f0f8ff',
    padding: 10,
    borderRadius: 8,
  },
  updateItem: {
    marginBottom: 10,
  },
  updateText: {
    fontSize: 16,
    color: '#0e8028',
  },
  updateDate: {
    fontSize: 14,
    color: '#888',
  },
  seeMoreBtn:{
    margin:'auto',
    width: '30%',
    padding:5,
    borderRadius:5,
    backgroundColor:'#b6cadb'
  },
  seeMoreBtnText:{
    textAlign:'center',
    color:'#1f4b70',
    fontWeight:'500',
  }
});
