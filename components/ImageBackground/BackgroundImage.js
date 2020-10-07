/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

const BackgroundImage = ({ history }) => {


  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Button title="<==back" onPress={() => history.push('/')} />
        <Text style={styles.appbar}> ImageBackground </Text>
      </View>
      <ImageBackground
        source={image}
        style={styles.image}>
        <Text style={styles.image_text}>React Logo</Text>
        <Image style={styles.image_logo}
          source={image}
        />

      </ImageBackground>



    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'chartreuse',
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  image_text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 22,
  },
  image_logo: {
    width: 50,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 130,
    padding: 50,
    resizeMode: 'repeat',
  },
});

export default BackgroundImage;
