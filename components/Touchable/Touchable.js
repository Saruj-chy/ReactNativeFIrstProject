/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import TouchableHighlights from '../TouchableHighLight/TouchableHighLights';
import TouchableOpacity from '../TouchableOpacity/TouchableOpacity';

const Touchable = ({ history }) => {
  const people = [
    { name: 'John', id: 1 },
    { name: 'Saruj', id: 2 },
    { name: 'Rofiq', id: 3 },
    { name: 'Nishat', id: 4 },
    { name: 'Nuha', id: 5 },

  ];
  const employ = [
    { id: 1, name: 'Sarose Datta', age: 22, details: 'Android Developer' },
    { id: 2, name: 'Abir Hossain', age: 32, details: 'Machine Developer' },
    { id: 3, name: 'Salam Kabir', age: 42, details: 'Field Developer' },
    { id: 4, name: 'Rohima Begum', age: 52, details: 'Machanical Developer' },
    { id: 5, name: 'Jorina Begum', age: 58, details: 'Swing Developer' },
    { id: 6, name: 'Sokina Begum', age: 70, details: 'Aircraft Developer' },
  ]

  return (
    <ScrollView style={styles.body}>
      <View >
        <View style={styles.container}>
          <Button title="<==back" onPress={() => history.push('/')} />
          <Text style={styles.appbar}> About </Text>
        </View>
        <Text style={styles.button}>TouchableOpacity: </Text>
        {
          people.map(person => <TouchableOpacity Person={person} key={person.id} />)
        }
        <Text style={styles.button}>TouchableHighLight: </Text>
        {
          employ.map(emp => <TouchableHighlights Employ={emp} key={emp.id} />)
        }

      </View>

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },
  container: {
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  appbar: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  button: {
    padding: 10,
    margin: 10,
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 22,
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 20,

  }

})

export default Touchable;