import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Rental App</Text>

      {/* Button to navigate to Available Items Screen */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Available Items')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>View Available Items</Text>
      </TouchableOpacity>

      {/* Button to navigate to Rent Item Screen */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Rental')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Rent an Item</Text>
      </TouchableOpacity>

      {/* Button to navigate to Upload Materials Screen */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Upload Materials')}
        style={[styles.button, styles.secondaryButton]}
      >
        <Text style={styles.buttonText}>Upload Materials</Text>
      </TouchableOpacity>

      {/* Button to navigate to Add Customer Screen */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Customer')}
        style={[styles.button, styles.secondaryButton]}
      >
        <Text style={styles.buttonText}>Add Customer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  secondaryButton: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
