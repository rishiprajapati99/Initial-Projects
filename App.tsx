import React, { JSX } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Hello = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          borderWidth: 2,
          borderColor: 'black',
          alignItems: 'center',
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        ></Image>
        <Text style={styles.text}>This is React native</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 420,
    height: 420,
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    borderWidth: 3,
    borderColor: 'blue',
  },
});
export default Hello;
