import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Switch,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import * as Font from "expo-font";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenValue: "",
      choosenIndex: "",
      switchValue: false,
      fontLoaded: false,
      inputText: "",
      username: "",
      password: ""
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Dosis-Bold": require("./assets/font/Dosis-Bold.otf"),
      "Dosis-Regular": require("./assets/font/Dosis-Regular.otf")
    });
    this.setState({ fontLoaded: true });
  }
  clear = () => {
    alert("Successful Sign Up");
    this.state.inputText.clear();
    this.state.username.clear();
    this.state.password.clear();
    this.setState({ switchValue: false });
    this.setState({ choosenValue: "" });
  };

  toggleSwitch(value) {
    this.setState({ switchValue: value });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView
            enabled
            behavior="padding"
            style={styles.container}
          >
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                paddingHorizontal: 50
              }}
            >
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={inputText => {
                  this.setState({ inputText });
                }}
                ref={inputText => {
                  this.state.inputText = inputText;
                }}
              ></TextInput>

              <Text style={styles.label}>Position</Text>
              <Picker
                selectedValue={this.state.choosenValue}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({
                    choosenValue: itemValue,
                    choosenIndex: itemIndex
                  })
                }
                style={styles.position}
              >
                <Picker.Item
                  label="Junior Developer"
                  value="1"
                  style={styles.pickderLabel}
                />
                <Picker.Item
                  label="Senior Developer"
                  value="2"
                  style={styles.pickderLabel}
                />
                <Picker.Item
                  label="UI Designer"
                  value="3"
                  style={styles.pickderLabel}
                />
                <Picker.Item
                  label="Team Leader"
                  value="4"
                  style={styles.pickderLabel}
                />
                <Picker.Item
                  label="Technical Support"
                  value="5"
                  style={styles.pickderLabel}
                />
              </Picker>

              <Text
                style={{
                  fontFamily: "Dosis-Bold",
                  fontSize: 15,
                  color: "white",
                  marginTop: 10
                }}
              >
                Gender
              </Text>
              <View style={styles.gender}>
                <Switch
                  style={{
                    marginTop: 20,
                    alignSelf: "flex-start",
                    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
                  }}
                  onValueChange={this.toggleSwitch.bind(this)}
                  value={this.state.switchValue}
                  thumbColor={this.state.switchValue ? "green" : "white"}
                  trackColor={{ false: "gray", true: "lightgreen" }}
                ></Switch>
                <Text style={styles.genderText}>
                  {this.state.switchValue ? "Female" : "Male"}
                </Text>
              </View>

              <Text style={styles.label}>User Name</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={username => {
                  this.setState({ username });
                }}
                ref={username => {
                  this.state.username = username;
                }}
              ></TextInput>

              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={password => {
                  this.setState({ password });
                }}
                ref={password => {
                  this.state.password = password;
                }}
              ></TextInput>

              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
                onPress={() => this.clear()}
              >
                <Text style={styles.btnText}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242132",
    // alignItems: "flex-start",
    justifyContent: "center"
  },
  textInput: {
    borderWidth: 1,
    marginBottom: 10,
    width: "100%",
    height: 40,
    borderRadius: 7,
    elevation: 15,
    backgroundColor: "lightgray"
  },
  gender: {
    flexDirection: "row",
    marginBottom: 10
  },
  position: {
    borderRadius: 7,
    borderWidth: 1,
    width: "100%",
    elevation: 15,
    backgroundColor: "lightgray"
  },
  genderText: {
    fontSize: 15,
    fontFamily: "Dosis-Bold",
    color: "white",
    width: "100%",
    padding: 10,
    marginTop: 10
  },
  label: {
    fontFamily: "Dosis-Bold",
    fontSize: 15,
    color: "white",
    marginTop: 10
  },
  btn: {
    width: "100%",
    height: 40,
    backgroundColor: "skyblue",
    borderWidth: 1,
    borderRadius: 7
  },
  btnText: {
    fontSize: 15,
    color: "blue",
    alignSelf: "center",
    marginVertical: 10,
    fontFamily: "Dosis-Bold"
  },
  pickderLabel: {
    fontFamily: "Dosis-Regular"
  }
});
