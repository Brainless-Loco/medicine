import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function LatestActivities() {
  // Example activity data
  const activities = [
    {
      id: '1',
      title: 'Health tips on constipation',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yf2hmynGmEKGLPdplehSLiulslb4emU4BA&s',
      facebookLink: 'https://facebook.com',
      linkedinLink: 'https://linkedin.com',
    },
    {
      id: '2',
      title: 'New product launch: Colistimethate',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/042/585/516/small_2x/ai-generated-medical-stethoscope-on-green-background-top-view-with-copy-space-photo.jpg',
      facebookLink: 'https://facebook.com',
      linkedinLink: 'https://linkedin.com',
    },
    {
      id: '3',
      title: 'Discounts on baby care products',
      image: 'https://img.freepik.com/premium-photo/stethoscope-isolated-blue-background-top-view-healthcare-medicine-concept_132358-320.jpg',
      facebookLink: 'https://facebook.com',
      linkedinLink: 'https://linkedin.com',
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open link", err));
  };

  const renderActivity = ({ item,idx }) => (
    <View style={styles.activityBox} key={idx}>
      {/* Left Section: Title and Image */}
      <View style={styles.activityInfo}>
        <Image source={{ uri: item.image }} style={styles.activityImage} />
        <Text style={styles.activityTitle}>{item.title}</Text>
      </View>

      {/* Right Section: Social Media Links */}
      <View style={styles.socialLinks}>
        <TouchableOpacity onPress={() => openLink(item.facebookLink)} style={styles.iconButton}>
          <FontAwesome5 name="facebook" size={45} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink(item.linkedinLink)} style={styles.iconButton}>
          <FontAwesome5 name="linkedin" size={45} color="#0077b5" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View 
    style={styles.container}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Our Latest Activities</Text>
        <Text style={styles.sectionSubtitle}>For more details, tap the social media icons.</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          activities.map((item,idx)=>{
            return renderActivity({item,idx})
          })
        }

      </ScrollView>
        
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex:1
  },
  sectionTitleContainer:{
    width:'100%',
    marginTop:20
  },
  sectionTitle:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004eb3',
    marginBottom: 4,
  },
  sectionSubtitle:{
    fontSize: 15,
    color: '#555',
    marginBottom: 20,
  },
  activityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#004ea0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#f0f6f7',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  activityInfo: {
    flex: 3, // 75% width
  },
  activityImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004ea0',
  },
  socialLinks: {
    flex: 1, // 25% width
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  iconButton: {
    marginVertical: 8,
  },
});
