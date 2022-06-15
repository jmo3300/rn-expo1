import {Text, View, ViewStyle } from 'react-native';

interface Props {
  style: ViewStyle
}

const Footer = (props:Props) => {return (
<View style = {props.style}>
  <Text>Footer</Text>
</View>
)}

export default Footer;

