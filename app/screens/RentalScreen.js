import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RentalScreen = ({ route, navigation }) => {
  const { item } = route.params || {};
  const [quantity, setQuantity] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleConfirmRental = () => {
    if (!quantity) {
      toast.error('Please enter the quantity.');
      return;
    }
    if (!quantity || quantity <= 0) {
      toast.error('Quantity must be a positive number greater than 0.');
      return;
    }
    if (endDate < startDate) {
      toast.error('End date must be after the start date.');
      return;
    }
    // Navigate to Add Customer screen
  navigation.navigate('Customer', {
    itemName: item.name,
    quantity: quantity,
    rate: item.rate,
    startDate: startDate.toDateString(),
    endDate: endDate.toDateString(),
  });

    // Confirm rental logic
    toast.success(
      `Rental Confirmed:
      Item: ${item.name}
      Rate per day: $${item.rate}
      Quantity: ${quantity}
      Start Date: ${startDate.toDateString()}
      End Date: ${endDate.toDateString()}`
    );
  };

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No item selected for rental. Please go back and select an item.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rent Item</Text>

      {/* Item Name */}
      <Text style={styles.itemDetail}>
        <Text style={styles.bold}>Item:</Text> {item.name}
      </Text>
      <Text style={styles.itemDetail}>
        <Text style={styles.bold}>Rate per day:</Text> ${item.rate}
      </Text>

      {/* Quantity */}
      <Text style={styles.label}>Quantity:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />

      {/* Start Date */}
      <Text style={styles.label}>Start Date:</Text>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()} // Prevent past dates
        dateFormat="MM/dd/yyyy"
      />

      {/* End Date */}
      <Text style={styles.label}>End Date:</Text>
      <DatePicker
  selected={endDate}
  onChange={(date) => setEndDate(date)}
  minDate={startDate} // Ensure end date is not before start date
  dateFormat="MM/dd/yyyy"
/>

      {/* Confirm Rental Button */}
      <View style={styles.buttonContainer}>
        <Button title="Confirm Rental" onPress={handleConfirmRental} color="#2196F3" />
      </View>

      {/* Toast Container */}
      <ToastContainer position="center" autoClose={5000} />
    </View>
  );
};

export default RentalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemDetail: {
    fontSize: 16,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
});
