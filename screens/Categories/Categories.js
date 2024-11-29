import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Categories({ navigation }) {
  const categories = ["Critical Care", "Onco", "Hematology", "Gyno", "Baby Care", "Neuro", "Nutrition",];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleTextChange = (value) => {
    setText(value);
    if (onChangeText) {
      onChangeText(value);
    }
  };

  useEffect(() => {
    setSelectedCategory(null)
  }, [])
  

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.title}>Categories</Text> */}
      <SearchBar onChangeText={(text) => setSearchText(text)} />
      {filteredCategories && filteredCategories.map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.category}
          onPress={() => navigation.navigate('Medicines', { category })}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
      {!filteredCategories && categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.category,
            selectedCategory === category && styles.selectedCategory,
          ]}
          onPress={() => handlePress(category)}
        >
          <Text style={[
            styles.categoryText,
            selectedCategory === category && styles.selectedText
          ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={{height:25}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal:16,
    backgroundColor: '#fff',
    paddingBottom:50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007bff',
  },
  category: {
    borderWidth: 3,
    borderColor: '#004eb3',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  selectedCategory: {
    backgroundColor: '#489cf7', // A soothing teal color related to the medical industry
    borderColor: '#fff', // A deeper shade of teal
  },
  categoryText: {
    color: '#004eb3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff', // White text for better contrast on selected color
  },
});
