/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const FlatList = ({ history }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const [people, setPeople] = useState([
    { name: 'John', id: 1 },
    { name: 'Saruj', id: 2 },
    { name: 'Rofiq', id: 3 },
    { name: 'Nishat', id: 4 },
    { name: 'Nuha', id: 5 },
    { name: 'Sama', id: 6 },
  ]);

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Button title="<==back" onPress={() => history.push('/')} />
        <Text style={styles.appbar}> FlatList </Text>
      </View>


      <Text style={styles.title} >This is flatlist, which have some error</Text>
      {/* <FlatList
        data={people}
        // renderItem={({ item }) => {
        //   <Text> {item.name} </Text>
        // }}
        keyExtractor={item => item.id}
      >{
          console.log("object")
        }
      </FlatList> */}
      {/* <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      >

      </FlatList> */}

    </View>
  );
};


const styles = StyleSheet.create({
  body: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: 'green',

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

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 200,
  },
});

export default FlatList;

