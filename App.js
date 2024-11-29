import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard/Dashboard'
import Categories from './screens/Categories/Categories';
import Medicines from './screens/Medicines/Medicines';
import MedicineDetails from './screens/MedicineDetails/MedicineDetails';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="Categories" component={Categories} options={{
            title: "Categories",
            headerStyle: {
              backgroundColor: '#004eb3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}/>
        <Stack.Screen name="Medicines" component={Medicines} options={{
            title: "Medicines",
            headerStyle: {
              backgroundColor: '#004eb3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}/>
          
        <Stack.Screen name="MedicineDetails" component={MedicineDetails} options={{
          title: "Details",
          headerStyle: {
            backgroundColor: '#004eb3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}