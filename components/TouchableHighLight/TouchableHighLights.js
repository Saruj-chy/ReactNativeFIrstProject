/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const TouchableHighlights = (props) => {
  const { id, name, age, details } = props.Employ;
  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="#DDDDDD"
      onPress={() => Alert.alert(name)}

      testOnly_pressed={false}
    >
      <View style={styles.item}>
        <Text style={styles.item_text}>Serial id: {id} </Text>
        <Text style={styles.item_text}>Employ Name: {name} </Text>
        <Text style={styles.item_text}>Employ Age: {age} </Text>
        <Text style={styles.item_text}>Employ Details: {details} </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 10

  },
  item_text: {
    color: 'blue',
    padding: 10
  }

})

export default TouchableHighlights;
