import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  TextInput,
  Picker,
  StatusBar,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import * as Font from "expo-font";
import RadioBtn from "./components/RadioBtn";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      business_man_mm: "",
      business_man_en: "",
      pamana_mm: "",
      pamana_en: "",
      fatherName: "",
      fatherName_en: "",
      religion: "",
      national: "",
      education: "",
      dob: "",
      townshipName: "",
      address: "",
      phone: "",
      email: "",
      nrc_mm: "",
      mm: "",
      nrc_en: "",
      eng: "",
      number_mm: "",
      number_en: "",
      selectedData: ""
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Pyidaungsu-Regular": require("./assets/Pyidaungsu/Pyidaungsu-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  changeSelectedData(value) {
    this.setState({ selectedData: value });
  }
  CheckTextInput = () => {
    if (this.state.fatherName == "") {
      alert("Please Enter Father Name Myanmar");
    } else if (this.state.fatherName_en == "") {
      alert("Please Enter Father Name English");
    } else if (this.state.religion == "") {
      alert("Please Enter Religion");
    } else if (this.state.national == "") {
      alert("Please Enter National");
    } else if (this.state.dob == "") {
      alert("Please Enter Date of Birth");
    } else if (this.state.selectedData == "") {
      alert("Please Choose Gender");
    } else {
      //  console.log(this.props.active);
      alert("Successful Register");
      this.setState({ business_man_mm: "" }),
        this.setState({ business_man_en: "" }),
        this.setState({ nrc_mm: "" }),
        this.setState({ pamana_mm: "" }),
        this.setState({ mm: "" }),
        this.setState({ number_mm: "" }),
        this.setState({ number_en: "" }),
        this.setState({ nrc_en: "" }),
        this.setState({ pamana_en: "" }),
        this.setState({ eng: "" }),
        this.setState({ fatherName: "" }),
        this.setState({ fatherName_en: "" }),
        this.setState({ religion: "" }),
        this.setState({ national: "" }),
        this.setState({ education: "" }),
        this.setState({ dob: "" }),
        this.setState({ townshipName: "" }),
        this.setState({ address: "" }),
        this.setState({ phone: "" }),
        this.setState({ email: "" });
      this.setState({ selectedData: "" });
    }
  };
  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView
            enabled
            behavior="padding"
            style={styles.container}
          >
            <StatusBar barStyle="dark-content"></StatusBar>
            <View style={styles.header}>
              <Text style={styles.home}>
                Home <Text style={styles.register}>/ Register</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 30
              }}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>(၁) မှတ်ပုံတင်ရန် အဆိုပြုသူ</Text>
                <View
                  style={{ height: 2, width: "100%", backgroundColor: "gray" }}
                ></View>
                <View style={{ marginVertical: 20 }}>
                  <Text style={styles.business}>(က) လုပ်ငန်းရှင်</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={business_man_mm =>
                      this.setState({ business_man_mm })
                    }
                    value={this.state.business_man_mm}
                    placeholder="မြန်မာ"
                  ></TextInput>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={business_man_en =>
                      this.setState({ business_man_en })
                    }
                    value={this.state.business_man_en}
                    placeholder="အင်္ဂလိပ်"
                  ></TextInput>
                </View>
                <View style={{ marginVertical: 10 }}>
                  <Text style={styles.business}>
                    (ခ) နိုင်ငံသားစိစစ်ရေး ကဒ်ပြားအမှတ်
                  </Text>
                  <Picker
                    selectedValue={this.state.nrc_mm}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        nrc_mm: itemValue
                      })
                    }
                    style={styles.nrc}
                  >
                    <Picker.Item
                      label="၁"
                      value="1"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၂"
                      value="2"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၃"
                      value="3"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၄"
                      value="4"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၅"
                      value="5"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၆"
                      value="6"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၇"
                      value="7"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၈"
                      value="8"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၉"
                      value="9"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၁၀"
                      value="10"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၁၁"
                      value="11"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၁၂"
                      value="12"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၁၃"
                      value="13"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="၁၄"
                      value="14"
                      style={styles.pickderLabel}
                    />
                  </Picker>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={pamana_mm => this.setState({ pamana_mm })}
                    value={this.state.pamana_mm}
                    placeholder="ပမန"
                  ></TextInput>
                  <Picker
                    selectedValue={this.state.mm}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        mm: itemValue
                      })
                    }
                    style={styles.nrc}
                  >
                    <Picker.Item
                      label="နိုင်"
                      value="1"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="ပြု"
                      value="2"
                      style={styles.pickderLabel}
                    />
                  </Picker>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={number_mm => this.setState({ number_mm })}
                    value={this.state.number_mm}
                    placeholder="မှတ်ပုံတင်နံပါတ်"
                  ></TextInput>
                </View>
                <View style={{ marginVertical: 10 }}>
                  <Picker
                    selectedValue={this.state.nrc_en}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        nrc_en: itemValue
                      })
                    }
                    style={styles.nrc}
                  >
                    <Picker.Item
                      label="1"
                      value="1"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="2"
                      value="2"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="3"
                      value="3"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="4"
                      value="4"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="5"
                      value="5"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="6"
                      value="6"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="7"
                      value="7"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="8"
                      value="8"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="9"
                      value="9"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="10"
                      value="10"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="11"
                      value="11"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="12"
                      value="12"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="13"
                      value="13"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="14"
                      value="14"
                      style={styles.pickderLabel}
                    />
                  </Picker>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={pamana_en => this.setState({ pamana_en })}
                    value={this.state.pamana_en}
                    placeholder="PaMaNa"
                  ></TextInput>
                  <Picker
                    selectedValue={this.state.eng}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        eng: itemValue
                      })
                    }
                    style={styles.nrc}
                  >
                    <Picker.Item
                      label="N"
                      value="1"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="P"
                      value="2"
                      style={styles.pickderLabel}
                    />
                  </Picker>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={number_en => this.setState({ number_en })}
                    value={this.state.number_en}
                    placeholder="NRC Number"
                  ></TextInput>
                </View>
                <View style={{ marginVertical: 20 }}>
                  <Text style={styles.business}>(ဂ) အဖအမည်*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={fatherName => this.setState({ fatherName })}
                    value={this.state.fatherName}
                    placeholder="မြန်မာ"
                  ></TextInput>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={fatherName_en =>
                      this.setState({ fatherName_en })
                    }
                    value={this.state.fatherName_en}
                    placeholder="အင်္ဂလိပ်"
                  ></TextInput>
                </View>
                <View style={{ marginVertical: 20 }}>
                  <Text style={styles.business}>(ဃ)လူမျိုး*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={religion => this.setState({ religion })}
                    value={this.state.religion}
                  ></TextInput>
                </View>
                <View style={{ marginVertical: 20 }}>
                  <Text style={styles.business}>(င) ကိုးကွယ်သည့်ဘာသာ*</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={national => this.setState({ national })}
                    value={this.state.national}
                  ></TextInput>
                </View>
                <View style={{ marginVertical: 20 }}>
                  <Text style={styles.business}>(စ) ပညာအရည်အချင်း</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={education => this.setState({ education })}
                    value={this.state.education}
                  ></TextInput>
                </View>
                <View>
                  <Text style={styles.business}>(ဆ) ကျား/မ *</Text>
                  <View style={{ flexDirection: "row" }}>
                    <RadioBtn
                      label="ကျာ:"
                      active={this.state.selectedData == "Male" ? true : false}
                      onPress={this.changeSelectedData.bind(this, "Male")}
                    />
                    <RadioBtn
                      label="မ"
                      active={
                        this.state.selectedData == "Female" ? true : false
                      }
                      onPress={this.changeSelectedData.bind(this, "Female")}
                    />
                  </View>
                </View>
                <View style={{ marginVertical: 20 }}>
                  <Text style={styles.business}>(ဇ)မွေးသက္ကရာဇ် *</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={dob => this.setState({ dob })}
                    value={this.state.dob}
                    placeholder="d-m-y"
                  ></TextInput>
                </View>
                <View style={{ marginVertical: 10 }}>
                  <Text style={styles.business}>(စျ) မြို့နယ်</Text>
                  <Picker
                    selectedValue={this.state.townshipName}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        townshipName: itemValue
                      })
                    }
                    style={styles.nrc}
                  >
                    <Picker.Item
                      label="Select Township"
                      value="1"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label=" ပျဉ်းမနား"
                      value="2"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label=" လယ်ဝေး"
                      value="3"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label=" တပ်ကုန်း"
                      value="4"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label=" ဥတရသီရိ"
                      value="5"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="ပုဗသီရိ"
                      value="6"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="ဒကိဏသီရိ"
                      value="7"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="ဇမူသီရိ"
                      value="8"
                      style={styles.pickderLabel}
                    />
                    <Picker.Item
                      label="ဇေယျာသီရိ"
                      value="9"
                      style={styles.pickderLabel}
                    />
                  </Picker>
                </View>
                <View style={{ marginVertical: 10 }}>
                  <Text style={styles.business}>(ည)နေရပ်လိပ်စာ</Text>
                  <TextInput
                    value={this.state.address}
                    multiline={true}
                    style={[
                      styles.textarea,
                      {
                        marginTop: 20,
                        backgroundColor: "white",
                        minHeight: 100,
                        textAlignVertical: "top"
                      }
                    ]}
                    onChangeText={address => this.setState({ address })}
                    value={this.state.address}
                  />
                </View>
                <View style={{ marginTop: 40 }}>
                  <Text style={styles.business}>(ဍ) ဖုန်းနံပါတ်</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={phone => this.setState({ phone })}
                    value={this.state.phone}
                    placeholder=" ဖုန်းနံပါတ်"
                    keyboardType="phone-pad"
                  ></TextInput>
                </View>
                <View>
                  <Text style={styles.business}>(ဌ) အီးမေးလ်</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    placeholder="အီးမေးလ်"
                    keyboardType="email-address"
                  ></TextInput>
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={this.CheckTextInput}
                >
                  <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
              </ScrollView>
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
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },

  header: {
    borderStyle: "solid",
    backgroundColor: "green",
    color: "white",
    fontSize: 17,
    elevation: 15,
    height: "10%",
    marginVertical: 20
  },
  home: {
    marginVertical: 30,
    fontSize: 20,
    paddingHorizontal: 20
  },
  register: {
    marginVertical: 30,
    fontSize: 20,
    color: "white"
  },
  title: {
    fontSize: 25,
    fontFamily: "Pyidaungsu-Regular",
    marginBottom: 10
  },
  business: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: "Pyidaungsu-Regular"
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    height: 35,
    borderRadius: 7,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  nrc: {
    borderWidth: 1,
    backgroundColor: "lightgray",
    height: 35
  },
  textarea: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    width: "100%",
    height: 35,
    alignSelf: "center",
    backgroundColor: "white",
    fontSize: 16,
    borderRadius: 7,
    paddingHorizontal: 10
  },
  btn: {
    width: "100%",
    height: 40,
    backgroundColor: "green",
    marginVertical: 10,
    borderRadius: 7
  },
  btnText: {
    color: "white",
    textAlign: "center",
    marginVertical: 10
  },
  pickderLabel: {
    fontFamily: "Pyidaungsu-Regular"
  }
});
