import React from 'react';//here import and from are the keywords and React is an Object from the library('react') . import is used to import (bring) something from any library . from defines the destination that from where to bring the required thing. react library have the Object =>React which is used to compile and use the RN components like <View>,<Text> etc. in new versions of RN there is no need to write this line but for good practice i can write this line
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StyleSheet,
  useColorScheme,
  StatusBar,
  ScrollView,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ScrollableCards from './components/ScrollableCards';
import FancyCard from './components/FancyCard';
import BlogCard from './components/BlogCard';
import ContactList from './components/ContactList';

const App = () => {
  const backgroundcolor = useColorScheme() === 'dark' ? '#000' : '#fff';
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          {
            // backgroundColor: backgroundcolor,
            flex: 1,
          },
        ]}
      >
        {/* <StatusBar
          barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        ></StatusBar> */}
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
          <FlatCards />
          <ScrollableCards />
          <FancyCard />
          <BlogCard />
          <ContactList />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default App;
