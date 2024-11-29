import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard/Dashboard'
import Categories from './screens/Categories/Categories';
import Medicines from './screens/Medicines/Medicines';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Medicines" component={Medicines} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}