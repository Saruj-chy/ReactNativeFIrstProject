/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Person = (props) => {

  const { name, username, email, phone, website } = props.person;

  return (
    <View style={styles.userView}>
      <Text style={{ ...styles.textView, fontSize: 20, textAlign: 'center', color: 'blue' }}>Full Name:  {name} </Text>
      <Text style={styles.textView} >UserName: {username} </Text>
      <Text style={styles.textView} >Email: {email} </Text>
      <Text style={styles.textView} >Phone: {phone} </Text>
      <Text style={styles.textView} >Website: {website} </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  userView: {
    backgroundColor: 'orange',
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  textView: {
    color: 'lime',
    padding: 5,
    fontSize: 18,
    textAlign: 'left',
  }

})

export default Person;