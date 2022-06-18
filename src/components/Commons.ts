import { StyleSheet } from "react-native";

export const loadingBackroundColor = '#d3d3d3'; // lightgrey
export const errorBackroundColor = '#ffb6c1'; // lightpink

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
    marginHorizontal: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowoffset: { width: 5, height: 5 },
    elevation: 7,
    shadowOpacity: 0.9,
    padding: 5,
    borderRadius: 50
  }
})
