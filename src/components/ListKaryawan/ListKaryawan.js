import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const ListKaryawan = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.karyawan} //  [{key: 0, value: 'JKT'}]
      renderItem={info => {
        return (
          <ListItem
            imageKaryawan={info.item.image}
            namaKaryawan={info.item.nama}
            onPressItem={() => {
              props.onItemSelected(info.item.key);
            }}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default ListKaryawan;
