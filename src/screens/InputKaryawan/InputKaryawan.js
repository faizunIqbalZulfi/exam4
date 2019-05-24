import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { connect } from "react-redux";

import { addPlace, createData } from "../../store/actions/index";
import { Fire } from "../../firebase/index";

import imageBackground from "../../assets/react-native-wide.png";
import imageBackgroundWorld from "../../assets/world-map.jpg";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import {
  NamaInput,
  UsiaInput,
  JabatanInput
} from "../../components/FormInput/FormInput";

class InputKaryawan extends Component {
  state = {
    Nama: "",
    Usia: "",
    Jabatan: ""
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  namaChangedHandler = val => {
    this.setState({
      Nama: val
    });
  };

  usiaChangedHandler = val => {
    this.setState({
      Usia: val
    });
  };

  jabatanChangedHandler = val => {
    this.setState({
      Jabatan: val
    });
  };
  // showData = items => {
  //     var arrData = []
  //     var rawData = items.val()

  //     Object.keys(rawData).forEach(id => {
  //         arrData.push({
  //             key: id,
  //             value: rawData[id].name,
  //             image: {
  //                 uri: "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
  //             }
  //         })
  //     })

  // }

  placeAddedHandler = () => {
    console.log(this.props.uid);

    var karyawan = Fire.database().ref("karyawan");
    if (
      this.state.Nama.trim() !== "" &&
      this.state.Usia.trim() !== "" &&
      this.state.Jabatan.trim() !== ""
    ) {
      // input data ke firebase
      karyawan
        .push({
          nama: this.state.Nama,
          usia: this.state.Usia,
          jabatan: this.state.Jabatan
          // uid: this.props.uid
        })
        .then(res => {
          // ambil semua data di firebase, lempar ke redux
          karyawan.once("value", this.props.onCreateData, err => {
            console.log(err);
          });
        });
    }
  };

  render() {
    console.log(this.props.uid);

    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Input Data Karyawan</HeadingText>
          </MainText>
          <NamaInput
            Nama={this.state.Nama}
            onChangeText={this.namaChangedHandler}
          />
          <UsiaInput
            Usia={this.state.Usia}
            onChangeText={this.usiaChangedHandler}
            placeholder="Usia"
          />
          <JabatanInput
            Jabatan={this.state.Jabatan}
            onChangeText={this.jabatanChangedHandler}
            placeholder="Jabatan"
          />
          <Button title="Input" onPress={this.placeAddedHandler} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

const mapStateToProps = state => {
  return {
    uid: state.auth.user.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName)),
    onCreateData: items => dispatch(createData(items))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputKaryawan);
