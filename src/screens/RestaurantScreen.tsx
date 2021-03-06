import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StyleSheet, Text, View } from "react-native"
import { RootStackParamsList } from "../../App"
import Footer from "../components/Footer"
import Restaurant from "../components/Restaurant"

type Props = NativeStackScreenProps<RootStackParamsList, 'Restaurant Details'>;
// see: https://reactnavigation.org/docs/typescript/

export default function RestaurantScreen({route}:Props) {

  const id = route.params.id;

  return (
    <View style={styles.container}>
      <View style={styles.payload}>
        <Restaurant id = {id}/>
      </View>
      <Footer style={styles.footer} />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#dddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#aaaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  payload: {
    flex: 8,
    backgroundColor: '#ffff',
    justifyContent: 'flex-start',
  },
})
