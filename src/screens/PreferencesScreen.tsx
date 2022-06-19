import { StyleSheet, View } from "react-native"

import Footer from "../components/Footer"
import Preferences from "../components/Preferences"

export default function PreferencesScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.payload}>
        <Preferences />
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
