import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Categories({ navigation }) {
  const categories = ["Critical Care", "Onco", "Hematology", "Gyno", "Baby Care", "Neuro", "Nutrition"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.category}
          onPress={() => navigation.navigate('Medicines', { category })}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
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
  category: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
