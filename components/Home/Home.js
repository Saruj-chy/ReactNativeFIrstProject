/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';


const Separator = () => (
  <View style={styles.separator} />
);

const Home = ({ history }) => {
  return (
    <View style={styles.container}>


      <Button title="FlatList" onPress={() => history.push('/flatlist')} />
      <Separator />
      <Button title="Touchable Opacity" onPress={() => history.push('/touchable')} />
      <Separator />
      <Button title="ImageBackground" onPress={() => history.push('/image')} />
      <Separator />
      <Button title="KeybBoardAvoingView" onPress={() => history.push('/keyboard')} />
      <Separator />
      <Button title="Model" onPress={() => history.push('/model')} />
      <Separator />
      <Button title="About" onPress={() => history.push('/about')} />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});
export default Home;
