import { Text, View, ViewStyle } from 'react-native';

interface Props {
  style: ViewStyle
}

const Header = (props: Props) => {
  return (
    <View style = {props.style}>
      <Text>Header</Text>
    </View>
  )
}

export default Header;