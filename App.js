/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import About from './components/About/About';
import FlatList from './components/FlatList/FlatList';
import Home from './components/Home/Home';
import BackgroundImage from './components/ImageBackground/BackgroundImage';
import KeyboardAvoiding from './components/KeyboardAvoiding/KeyboardAvoiding';
import Touchable from './components/Touchable/Touchable';
import Model from './components/ViewModel/Model';

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/flatlist" component={FlatList} />
      <Route exact path="/touchable" component={Touchable} />
      <Route exact path="/image" component={BackgroundImage} />
      <Route exact path="/keyboard" component={KeyboardAvoiding} />
      <Route exact path="/model" component={Model} />
      <Route path="/about" component={About} />
    </NativeRouter>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'green',
  },

});

export default App;
