import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox, Button } from 'react-native-elements';

export default function Calculator() {
  const [renalReplacement, setRenalReplacement] = useState('Not on renal replacement');
  const [creatinine, setCreatinine] = useState('');
  const [isStable, setIsStable] = useState(true);
  const [therapeuticGoal, setTherapeuticGoal] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('Male');
  const [resultModalVisible, setResultModalVisible] = useState(false);
  const [result, setResult] = useState('');

  const calculateDose = () => {
    // Calculate the dose here
    const calculatedResult = 'Dose calculation result goes here';
    setResult(calculatedResult);
    setResultModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Renal Function Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Renal Function</Text>
        <Picker
          selectedValue={renalReplacement}
          style={styles.picker}
          onValueChange={(itemValue) => setRenalReplacement(itemValue)}
        >
          <Picker.Item label="Not on renal replacement" value="Not on renal replacement" />
          <Picker.Item label="On renal replacement" value="On renal replacement" />
        </Picker>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Creatinine</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={creatinine}
            onChangeText={setCreatinine}
          />
          <Text style={styles.unitLabel}>mg/dL</Text>
        </View>
        <View style={styles.checkboxRow}>
          <CheckBox
            title="Stable"
            checked={isStable}
            onPress={() => setIsStable(true)}
            containerStyle={styles.checkbox}
          />
          <CheckBox
            title="Unstable creatinine"
            checked={!isStable}
            onPress={() => setIsStable(false)}
            containerStyle={styles.checkbox}
          />
        </View>
      </View>

      {/* Therapeutic Goal Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Therapeutic Goal</Text>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Css,avg target</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={therapeuticGoal}
            onChangeText={setTherapeuticGoal}
          />
          <Text style={styles.unitLabel}>mg/L</Text>
        </View>
      </View>

      {/* Patient Parameters Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Patient Parameters</Text>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Age</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
          <Text style={styles.unitLabel}>years</Text>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Height</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
          <Picker
            selectedValue="cm"
            style={styles.pickerSmall}
            enabled={false}
          >
            <Picker.Item label="in" value="in" />
            <Picker.Item label="cm" value="cm" />
          </Picker>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Weight</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
          <Picker
            selectedValue="kg"
            style={styles.pickerSmall}
            enabled={false}
          >
            <Picker.Item label="kg" value="kg" />
            <Picker.Item label="lbs" value="lbs" />
          </Picker>
        </View>
        <View style={styles.checkboxRow}>
          <CheckBox
            title="Male"
            checked={gender === 'Male'}
            onPress={() => setGender('Male')}
            containerStyle={styles.checkbox}
          />
          <CheckBox
            title="Female"
            checked={gender === 'Female'}
            onPress={() => setGender('Female')}
            containerStyle={styles.checkbox}
          />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <Button
          title="Reset"
          buttonStyle={styles.resetButton}
          onPress={() => {
            setAge('');
            setHeight('');
            setWeight('');
            setGender('Male');
            setCreatinine('');
            setTherapeuticGoal('');
            setRenalReplacement('Not on renal replacement');
            setIsStable(true);
          }}
        />
        <Button
          title="Calculate"
          buttonStyle={styles.calculateButton}
          onPress={calculateDose}
        />
      </View>

      {/* Result Modal */}
      <Modal
        visible={resultModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setResultModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Calculation Result</Text>
            <Text style={styles.modalText}>{result}</Text>
            <Button
              title="Close"
              buttonStyle={styles.modalButton}
              onPress={() => setResultModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
      <View style={{height:30}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004eb3',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#004eb3',
    padding: 10,
    borderRadius: 4,
    flex: 2,
    marginRight: 10,
  },
  unitLabel: {
    fontSize: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  picker: {
    borderWidth: 5,
    borderColor: '#004eb3',
    borderRadius: 4,
    marginBottom: 10,
  },
  pickerSmall: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#004eb3',
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    backgroundColor: '#ccc',
    flex: 1,
    marginRight: 10,
  },
  calculateButton: {
    backgroundColor: '#004b8d',
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#004eb3',
  },
});
