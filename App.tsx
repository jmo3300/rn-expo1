import { Button, LogBox } from "react-native";
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])
// error solved, see discussion: https://github.com/facebook/react-native/issues/33557

import react from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import PreferencesScreen from './src/screens/PreferencesScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import NavigationBarMenu from "./src/components/NavigationBarMenu";

export type RootStackParamsList = {
  Restaurants: undefined,
  Preferences: undefined,
  'Restaurant Details': { id: string }
}

const RootStack = createNativeStackNavigator(
);
// error solved, see: https://stackoverflow.com/questions/71816116/stack-navigator-cannot-be-used-as-a-jsx-component


const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Restaurants'
          screenOptions={
            {
              headerRight: () => (
                <NavigationBarMenu />
              ),
            }

          }
        >
          <RootStack.Screen
            name="Restaurants"
            component={HomeScreen}
          />
          <RootStack.Screen
            name="Restaurant Details"
            component={RestaurantScreen}
          />
          <RootStack.Screen
            name="Preferences"
            component={PreferencesScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;