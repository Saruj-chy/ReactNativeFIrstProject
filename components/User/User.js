/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Person from '../Person/Person';

const User = ({ history }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))

  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Button title="<==back" onPress={() => history.push('/')} />
        <Text style={styles.appbar}> User Details from Server </Text>
      </View>
      {
        user.map(person => <Person person={person} key={person.id} />)
      }



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'orange',
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

})



export default User;