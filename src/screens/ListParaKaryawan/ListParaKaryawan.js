import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import ListKaryawan from "../../components/ListKaryawan/ListKaryawan";
import { Fire } from "../../firebase/index";
import { createData } from "../../store/actions/karyawan";

class ListParaKaryawan extends Component {
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

  componentDidMount() {
    var karyawan = Fire.database().ref("karyawan");
    karyawan.once("value", this.props.onCreateData, err => {
      console.log(err);
    });
  }

  itemSelectedHandler = key => {
    const selKaryawan = this.props.karyawan.find(karyawan => {
      return karyawan.key == key;
    });
    this.props.navigator.push({
      screen: "jc8reactnative.DetailKaryawanScreen",
      title: selKaryawan.nama,
      passProps: {
        selectedKaryawan: selKaryawan
      }
    });
  };

  render() {
    return (
      <View>
        <ListKaryawan
          karyawan={this.props.karyawan}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    karyawan: state.karyawan.karyawan,
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
)(ListParaKaryawan);
