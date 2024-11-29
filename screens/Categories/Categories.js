import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import MaterialCommunityIcons  from '@expo/vector-icons/MaterialCommunityIcons'

export default function Categories({ navigation }) {
  const categories = ["Critical Care", "Onco", "Hematology", "Gyno", "Baby Care", "Neuro", "Nutrition"];
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Default to Ascending
  const [isModalVisible, setModalVisible] = useState(false);

  // Sort categories based on selected order
  const filteredCategories = categories
    .filter((category) => category.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a)));

  // Toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Update sort order
  const handleSortChange = (order) => {
    setSortOrder(order);
    toggleModal(); // Close modal after selection
  };

  useEffect(() => {
    // Reset sort order when component loads
    setSortOrder('asc');
  }, []);

  return (
    <View style={styles.container}>
      {/* SearchBar and Sort Button in the Same Row */}
      <View style={styles.searchSortRow}>
        <View style={styles.searchBar}>
          <SearchBar onChangeText={(text) => setSearchText(text)}/>
        </View>
        <View style={styles.sortButton}>
          <TouchableOpacity onPress={toggleModal}>
              <MaterialCommunityIcons name="sort-alphabetical-variant" size={25} color="white" />
          </TouchableOpacity>
        </View> 
      </View>

      {/* Modal for Sorting Options */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Sort By</Text>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSortChange('asc')}
            >
              <Text style={styles.modalOptionText}>A → Z (Alphabetical Ascending)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSortChange('desc')}
            >
              <Text style={styles.modalOptionText}>Z → A (Alphabetical Descending)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCloseButton} onPress={toggleModal}>
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Category List */}
      <ScrollView>
        {filteredCategories.map((category) => (
          <TouchableOpacity
            key={category}
            style={styles.category}
            onPress={() => navigation.navigate('Medicines', { category })}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  searchSortRow: {
    display:'flex',
    width:'100%',
    // backgroundColor:'red',
    alignItems: 'center',
    marginBottom: 16,
    flexDirection:'row',
    justifyContent:'space-between',
    gap:0
  },
  searchBar: {
    // flex: 3, // 75% of row width
    width:'82%',
    // backgroundColor:'green',
    marginRight: 8,
  },
  sortButton: {
    // flex: 1, // 25% of row width
    width:'15%',
    backgroundColor: '#007bff',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  sortButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  category: {
    width:'92%',
    marginHorizontal:'auto',
    borderWidth: 3,
    borderColor: '#004eb3',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  categoryText: {
    color: '#004eb3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOption: {
    width: '100%',
    padding: 10,
    // paddingHorizontal:5,
    marginVertical: 5,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalOptionText: {
    color: '#fff',
    width:'100%',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign:'center'
  },
  modalCloseButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#7a7f85',
    borderRadius: 8,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
