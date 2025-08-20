import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  StatusBar,
  ScrollView,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

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
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
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
