import { Text, View, ViewStyle } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";

import { RootStackParamsList } from "../../App";

interface Props {
  style: ViewStyle
}

const Header = (props: Props) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <View style={props.style}>
      <Menu>
        <MenuTrigger text='Select action' />
        <MenuOptions>
          <MenuOption onSelect={() => {
            navigation.navigate('Preferences')
          }}>
            <Text>Preferences</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  )
}

export default Header;