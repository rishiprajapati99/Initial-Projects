import React from 'react';
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
  const mode = useColorScheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          // { backgroundColor: mode === 'dark' ? 'black' : 'white',
          { flex: 1 },
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
