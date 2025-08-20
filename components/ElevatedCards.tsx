import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';

const ElevatedCards = () => {
  const mode = useColorScheme();
  return (
    <View
      style={[
        {
          // backgroundColor: mode === 'dark' ? 'black' : 'white',
          //   flex: 1,
          //   height: 'auto',
        },
        // styles.border,
      ]}
    >
      <Text style={[styles.headingText]}>ElevatedCards</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={[
          {
            /*styles.border*/
          },
          { padding: 4 },
        ]}
      >
        <View style={[styles.cards, { backgroundColor: 'red' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#f6e58d' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#ffbe76' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#e74c3c' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#f1c40f' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#e74c3c' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#bdc3c7' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#8e44ad' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#4d510bff' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#ed850eff' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Last Card
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: 'red',
  },
  headingText: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
  cards: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    // padding: 8,
    marginHorizontal: 8,
  },
});

export default ElevatedCards;
