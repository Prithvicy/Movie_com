import React from "react";
import { Platform, View } from "react-native";
import { Text, StyleSheet } from "react-native";
function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize:18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
