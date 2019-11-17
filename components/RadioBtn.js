import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class RadioBtn extends React.Component {
  onPressBtn() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.onPressBtn()} activeOpacity={0.8}>
        <View style={styles.radioContainer}>
          <View style={styles.circle}>
            {this.props.active ? (
              <View style={styles.activeCircle} />
            ) : (
              <View style={styles.nonactiveCircle} />
            )}
          </View>
          <Text style={styles.label}>{this.props.label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center"
  },
  activeCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green"
  },
  nonactiveCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "lightgray"
  },
  label: {
    marginLeft: 5,
    fontFamily:"Pyidaungsu-Regular",
    fontSize:20
  }
});
