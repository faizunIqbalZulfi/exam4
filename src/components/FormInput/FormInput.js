import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

export class NamaInput extends Component {
  render() {
    return (
      <DefaultInput
        placeholder="Nama"
        value={this.props.Nama}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}

export class UsiaInput extends Component {
  render() {
    return (
      <DefaultInput
        placeholder="Usia"
        value={this.props.Usia}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}

export class JabatanInput extends Component {
  render() {
    return (
      <DefaultInput
        placeholder="Jabatan"
        value={this.props.Jabatan}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}
