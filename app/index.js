import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RentalScreen from './screens/RentalScreen';
import CustomerScreen from './screens/CustomerScreen';
import UploadMaterials from './screens/ManageMaterialsScreen';
import AvailableItemsScreen from './screens/AvailableItemsScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Available Items" component={AvailableItemsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rental" component={RentalScreen} />
        <Stack.Screen name="Customer" component={CustomerScreen} />
        <Stack.Screen name="Upload Materials" component={UploadMaterials} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
