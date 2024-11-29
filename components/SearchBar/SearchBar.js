import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function SearchBar({ onChangeText }) {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
    if (onChangeText) {
      onChangeText(value);
    }
  };

  return (
    <View style={styles.searchContainer}>
      <FontAwesome5 name="search" size={20} color="#004eb3" style={styles.icon} />
      <TextInput
        style={styles.textInput}
        placeholder="Search categories..."
        value={text}
        onChangeText={handleTextChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    borderWidth: 2.5,
    borderColor: '#007de',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 5,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#004eb3',
  },
});
