import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function Medicines({ navigation }) {
  // Example medicine data
  const medicines = [
    {
      id: '1',
      title: 'Uman Albumin',
      subtitle: 'Human Serum Albumin',
      details: '2.5% in 10 ml & 5% in 10 ml',
      available: true,
      price: '8000 Tk (2.5% in 10 ml)',
      manufacturer: 'Kedrion Biopharma',
      origin: 'Italy',
      dosage: '1-2 grams per day, as needed.',
      sideEffects: ['Nausea', 'Headache', 'Allergic reactions'],
      indications: 'Treatment of hypovolemia and hypoalbuminemia.',
    },
    {
      id: '2',
      title: 'Colistimethate',
      subtitle: 'Colistimethate Sodium',
      details: '1 million IU per vial',
      available: false,
      price: '5000 Tk per vial',
      manufacturer: 'XYZ Pharma',
      origin: 'Germany',
      dosage: '50,000 IU/kg body weight daily in divided doses.',
      sideEffects: ['Renal toxicity', 'Neurological effects'],
      indications: 'Treatment of infections caused by multidrug-resistant gram-negative bacteria.',
    },
    {
      id: '3',
      title: 'Uman Albumin',
      subtitle: 'Human Serum Albumin',
      details: '2.5% in 10 ml & 5% in 10 ml',
      available: true,
      price: '8000 Tk (2.5% in 10 ml)',
      manufacturer: 'Kedrion Biopharma',
      origin: 'Italy',
      dosage: '1-2 grams per day, as needed.',
      sideEffects: ['Nausea', 'Headache', 'Allergic reactions'],
      indications: 'Treatment of hypovolemia and hypoalbuminemia.',
    },
    
    {
      id: '4',
      title: 'Colistimethate',
      subtitle: 'Colistimethate Sodium',
      details: '1 million IU per vial',
      available: false,
      price: '5000 Tk per vial',
      manufacturer: 'XYZ Pharma',
      origin: 'Germany',
      dosage: '50,000 IU/kg body weight daily in divided doses.',
      sideEffects: ['Renal toxicity', 'Neurological effects'],
      indications: 'Treatment of infections caused by multidrug-resistant gram-negative bacteria.',
    },
    
  ];
  

  const renderMedicine = ({ item }) => (
    <TouchableOpacity
      style={styles.medicineBox}
      onPress={() => navigation.navigate('MedicineDetails', { medicine: item })}
    >
      {/* Left Section: Title, Subtitle, and Details */}
      <View style={styles.medicineInfo}>
        <Text style={styles.medicineTitle}>{item.title}</Text>
        <Text style={styles.medicineSubtitle}>{item.subtitle}</Text>
        <Text style={styles.medicineDetails}>{item.details}</Text>
      </View>

      {/* Right Section: Availability */}
      <View style={styles.availabilityContainer}>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: item.available ? 'green' : 'red' },
          ]}
        />
        <Text style={styles.availabilityText}>
          {item.available ? 'Available' : 'Not Available'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={medicines}
      keyExtractor={(item) => item.id}
      renderItem={renderMedicine}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 16,
    backgroundColor: '#fff',
  },
  medicineBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f0f8ff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  medicineInfo: {
    flex: 6,
  },
  medicineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004eb3',
    marginBottom: 4,
  },
  medicineSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  medicineDetails: {
    fontSize: 12,
    color: '#777',
  },
  availabilityContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 4,
  },
  availabilityText: {
    fontSize: 12,
    color: '#555',
  },
});
