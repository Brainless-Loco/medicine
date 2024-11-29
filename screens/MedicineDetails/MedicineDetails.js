import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

export default function MedicineDetails() {
  // Example fixed values for the medicine
  const medicine = {
    images: [
      'https://medex.com.bd/storage/images/packaging/uman-albumin-20-injection-86617598417-i1-WiRIZ59ovXBzP7CgMw5v.jpg',
      'https://tiimg.tistatic.com/fp/1/006/617/uman-albumin-20-100ml-solution-for-infusion-523.jpg',
      'https://www.dial4trade.com/uploaded_files/product_images/thumbs/uman-albumin-200-g-i-u-1283643927786854619.jpg',
    ],
    title: 'Uman Albumin',
    subtitle: 'Human Serum Albumin',
    tag: 'Critical Care',
    details: '2.5% in 10 ml & 5% in 10 ml',
    available: true,
    price: '8000 Tk (2.5% in 10 ml)',
    manufacturer: 'Kedrion Biopharma',
    origin: { country: 'Italy', flag: '🇮🇹' },
    dosage: '1-2 grams per day, as needed.',
    sideEffects: ['Nausea', 'Headache', 'Allergic reactions'],
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <View style={styles.titleInfo}>
          <Text style={styles.title}>{medicine.title}</Text>
          <Text style={styles.subtitle}>{medicine.subtitle}</Text>
          <Text style={styles.details}>{medicine.details}</Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Make Order</Text>
        </TouchableOpacity>
      </View>

    <View style={styles.tagsContainer}>
      <Text style={styles.tag}>{medicine.tag}</Text>
    </View>
      {/* Image Slider */}
      <View style={{width:'100%',marginBottom:20}}>
        <FlatList
            horizontal
            data={medicine.images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
            )}
            showsHorizontalScrollIndicator={false}
        />
      </View>
      

      {/* Details */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Price</Text>
        <Text style={styles.detailValue}>8000 BDT (2.5% in 10mL)</Text>
      </View>

      {/* Manufacturer */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Manufacturer</Text>
        <Text style={styles.detailValue}>Kedrion Biopharma</Text>
      </View>

      {/* Origin */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Origin</Text>
        <Text style={styles.detailValue}>
          {medicine.origin.flag} {medicine.origin.country}
        </Text>
      </View>

      {/* Dosage */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Dosage</Text>
        <Text style={styles.detailValue}>• {medicine.dosage}</Text>
      </View>

      {/* Indications */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Indications</Text>
        {medicine.sideEffects.map((effect, index) => (
          <Text key={index} style={styles.detailValue}>
            • Lorem Impsum dolor sit amet, consectetur
          </Text>
        ))}
      </View>

      {/* Side Effects */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Side Effects:</Text>
        {medicine.sideEffects.map((effect, index) => (
          <Text key={index} style={styles.detailValue}>
            • {effect}
          </Text>
        ))}
      </View>

      {/* First Button Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Medical Queries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Report Adverse Events</Text>
        </TouchableOpacity>
      </View>
        <View style={{width:'100%'}}>
            <Text style={styles.knowMoreAboutText}>KNOW MORE ABOUT</Text>
        </View>
      {/* Second Button Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Manufacturer</Text>
        </TouchableOpacity>
      </View>
      <View style={{height:15}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    // width: '100%',
    height: 250,
    aspectRatio: 1.25,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#004eb3',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleInfo: {
    flex: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004eb3',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 4,
  },
  details: {
    fontSize: 13,
    marginBottom: 10,
  },
  tagsContainer:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    marginBottom:20,
  },
  tag: {
    fontSize: 18,
    color: '#004ea0',
    fontWeight: '500',
    borderColor:'#004ea0',
    borderWidth:1.5,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:20
  },
  orderButton: {
    flex: 2,
    backgroundColor: '#004ea0',
    paddingVertical: 10,
    width:100,
    alignItems: 'center',
    borderRadius: 20,
    padding:10
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailsSection: {
    marginBottom: 30,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004eb3',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#555',
  },
  buttonRow: {
    display:'flex',
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginBottom: 25,
  },
  actionButton: {
    // flex: 1,
    width:'47%',
    // backgroundColor: '#004ea0',
    backgroundColor:'transparent',
    paddingVertical: 15,
    paddingHorizontal:15,
    alignItems: 'center',
    borderRadius: 35,
    borderWidth:2,
    borderColor: '#004ea0',
    marginHorizontal: 3,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  actionButtonText: {
    color: '#004ea0',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    
  },
  knowMoreAboutText:{
    textAlign:'center',
    fontSize:22,
    color:'#004ea0',
    marginBottom:20,
    marginTop:20,
  },
});
