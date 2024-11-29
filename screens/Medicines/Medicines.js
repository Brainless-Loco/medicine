import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Medicines({ route }) {
  const { category } = route.params;

  // Sample medicines for the category (replace with dynamic data)
  const medicines = {
    "Critical Care": ["Medicine A", "Medicine B"],
    "Onco": ["OncoMed A", "OncoMed B"],
    // Add more categories and medicines here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicines in {category}</Text>
      {medicines[category]?.map((medicine, index) => (
        <Text key={index} style={styles.medicine}>{medicine}</Text>
      )) || <Text>No medicines found for this category.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  medicine: {
    fontSize: 16,
    marginBottom: 8,
  },
});
