import React, { Component } from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Fire } from "../../firebase/index";

import { createData } from "../../store/actions/index";

class DetailKaryawan extends Component {
  karyawanDeletedHandler = key => {
    var karyawan = Fire.database().ref("karyawan");
    // input data ke firebase
    karyawan
      .child(key)
      .remove()
      .then(() => {
        // ambil semua data di firebase, lempar ke redux
        // Fire.database()
        //   .ref("karyawan")
        karyawan
          .once("value", this.props.onCreateData, err => {
            console.log(err);
          })
          .then(() => {
            this.props.navigator.pop();
          });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.imageKaryawan}
            source={this.props.selectedKaryawan.image}
          />
          <Text style={styles.textInput}>{`Nama: ${
            this.props.selectedKaryawan.nama
          }`}</Text>
          <Text style={styles.textInput}>{`Usia: ${
            this.props.selectedKaryawan.usia
          }`}</Text>
          <Text style={styles.textInput}>{`Jabatan: ${
            this.props.selectedKaryawan.jabatan
          }`}</Text>
        </View>
        <Button
          title="Delete"
          color="red"
          onPress={() => {
            this.karyawanDeletedHandler(this.props.selectedKaryawan.key);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 22
  },
  imageKaryawan: {
    width: "100%",
    height: 220
  },
  textInput: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center"
  },
  button: {
    margin: 10
  }
});
const mapStateToProps = state => {
  return {
    uid: state.auth.user.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateData: items => dispatch(createData(items))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailKaryawan);
