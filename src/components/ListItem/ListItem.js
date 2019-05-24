import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onPressItem}>
    <View style={styles.listItem}>
      <Image style={styles.Image} source={props.imageKaryawan} />
      <Text>{props.namaKaryawan}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#ffbd5b",
    alignItems: "center"
  },
  Image: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default ListItem;
