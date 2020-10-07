/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const About = ({ history }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Button title="<==back" onPress={() => history.push('/')} />
        <Text style={styles.appbar}> About </Text>
      </View>

      <View style={styles.centerView}>
        <Text style={{ ...styles.textView, fontSize: 22, color: 'blue', textAlign: 'center' }} > Hey, this is saruj project...</Text>
        <Text style={{ ...styles.textView, fontSize: 18, color: 'white' }}  > Why are you here, can you bring out the access sheet from Saruj! </Text>
        <Text style={{ ...styles.textView, fontSize: 15, color: 'white' }}> If you not, please go, take the access sheet from Saruj...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'purple'
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
  centerView: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  textView: {
    padding: 5,
    textAlign: 'left',

  }

})

export default About;