import { StyleSheet, View } from "react-native"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Restaurants from "../components/Restaurants"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.payload}>
        <View style={styles.list}>
          <Restaurants />
        </View>
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
  payload: {
    flex: 8,
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
  list: {
  },
  footer: {
    flex: 1,
    backgroundColor: '#aaaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
