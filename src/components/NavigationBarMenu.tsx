import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from "react-native-popup-menu";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { RootStackParamsList } from "../../App";
import { useState } from 'react';

interface Props {
  style: ViewStyle
}

const NavigationBarMenu = () => {

  const [homeDisabled, setHomeDisabled] = useState(false);
  const [preferencesDisabled, setPreferencesDisabled] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
      <Menu>
        <MenuTrigger>
          <Icon style={styles.menuIcon} name='menu' size={36} color={'grey'} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            disabled={navigation.getState().routeNames[navigation.getState().index] === 'Restaurants'}
            onSelect={() => {
              navigation.navigate('Restaurants')
            }}
          >
            <Text style={{ color: navigation.getState().routeNames[navigation.getState().index] === 'Restaurants' ? '#ccc' : '#000' }}>Home</Text>
          </MenuOption>
          <MenuOption
            disabled={navigation.getState().routeNames[navigation.getState().index] === 'Preferences'}
            onSelect={() => {
              navigation.navigate('Preferences')
            }}
          >
            <Text style={{ color: navigation.getState().routeNames[navigation.getState().index] === 'Preferences' ? '#ccc' : '#000' }}>Preferences</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
  )
}

const styles = StyleSheet.create({

  menuIcon: {
  },

})

export default NavigationBarMenu;