/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const KeyboardAvoiding = ({ history }) => {
  const [input, setInput] = useState(false);
  const [name, setName] = useState("");
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Button title="<==back" onPress={() => history.push('/')} />
        <Text style={styles.appbar}> KeyBoardAvoidingView </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS == "android" ? "padding" : "height"}
        style={styles.body}
      >
        <TouchableWithoutFeedback>
          <View style={styles.inner}>
            <Text style={styles.inputTitle}>UserName: </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your UserName"
              onChangeText={text => setName(text)}
              onKeyPress={() => setInput(true)}
            />
            {
              input && <Button color="#f194ff" title="Show Input" onPress={() => Alert.alert(name)} />
            }


          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>


    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'darkcyan',
  },
  container: {
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  appbar: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputTitle: {
    padding: 5,
    marginLeft: 20,
    color: 'white',
    fontSize: 20,
  },
  input: {
    padding: 10,
    margin: 10,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  inner: {
    padding: 24,
    flex: 1,
    // justifyContent: "space-around"
  },
})

export default KeyboardAvoiding;