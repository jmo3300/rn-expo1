import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';

export type RootStackParamsList = {
  Home: undefined,
  Restaurant: { id:string }
}

const RootStack = createNativeStackNavigator();
// error solved, see: https://stackoverflow.com/questions/71816116/stack-navigator-cannot-be-used-as-a-jsx-component


const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='HomeScreen'>
        <RootStack.Screen name="Home" component={HomeScreen}/>
        <RootStack.Screen name="Restaurant" component={RestaurantScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;