import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const FlatCards = () => {
  const mode = useColorScheme();
  return (
    <View
      style={[
        {
          // backgroundColor: mode === 'dark' ? 'black' : 'white',
          height: 'auto',
        },
        // styles.border,
      ]}
    >
      <View
        style={
          {
            /*styles.border*/
          }
        }
      >
        <Text style={[styles.headingText]}>FlatCards</Text>
      </View>

      <View
        style={[
          { flexDirection: 'row', padding: 4 },
          {
            /*styles.border*/
          },
        ]}
      >
        <View style={[styles.cards, { backgroundColor: 'red' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#f6e58d' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Light Yellow
          </Text>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#ffbe76' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Peach Card
          </Text>
        </View>
      </View>
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
    marginHorizontal: 8,
  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    // padding: 8,
    marginHorizontal: 8,
  },
});

export default FlatCards;
