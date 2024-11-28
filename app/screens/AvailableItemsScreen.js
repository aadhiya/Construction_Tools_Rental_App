import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Scrollbar } from 'react-scrollbars-custom';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Toast from 'react-native-toast-message';

const AvailableItemsScreen = ({ navigation }) => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const materialsCollection = collection(db, 'materials');
        const snapshot = await getDocs(materialsCollection);
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setMaterials(items);

        // Show success toast
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Materials loaded successfully!',
        });
      } catch (error) {
        console.error('Error fetching materials:', error);

        // Show error toast
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to load materials. Please try again.',
        });
      }
    };

    fetchMaterials();
  }, []);

  return (
    <>
      <Scrollbar
        style={{ height: '100%' }}
        noScrollX
        thumbYProps={{
          style: {
            backgroundColor: '#2196F3', // Customize scrollbar thumb color
          },
        }}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Available Materials</Text>
          {materials.map((material) => (
            <TouchableOpacity
              key={material.id}
              style={styles.itemContainer}
              onPress={() => {
                navigation.navigate('Rental', { item: material });

                // Show success toast
                Toast.show({
                  type: 'success',
                  text1: 'Navigating',
                  text2: `To rent "${material.name}"`,
                });
              }}
            >
              <Text style={styles.itemName}>{material.name}</Text>
              <Text style={styles.itemRate}>{`Rate per day: $${material.rate}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Scrollbar>
      <Toast /> {/* Add Toast Component */}
    </>
  );
};

export default AvailableItemsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemRate: {
    fontSize: 16,
    color: 'grey',
  },
});
