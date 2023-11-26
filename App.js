// Selene(Jiwon) Choi A01261925 Assignment03 MDIA4295

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CityListScreen from './screens/CityListScreen';
import CityWeatherScreen from './screens/CityWeatherScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen
          name="City"
          component={CityListScreen}
          options={{ title: 'Select your location', headerShown: false }}
        />
        <Stack.Screen
          name="Weather"
          component={CityWeatherScreen}
          options={{ title: 'Go back to list', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
