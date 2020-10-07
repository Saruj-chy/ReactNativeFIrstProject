/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Person = (props) => {
  const { name, id } = props.Person;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log(id)}>
      <Text style={styles.button}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    color: 'black',
    backgroundColor: 'cornsilk',
    textAlign: 'center',
    fontSize: 18,
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 20,
  },
});

export default Person;
