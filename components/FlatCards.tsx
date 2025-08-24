import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const FlatCards = () => {
  const mode = useColorScheme();
  const colors = [
    { name: 'Red', value: 'red' },
    { name: 'Yellow', value: '#f6e58d' },
    { name: 'Peach', value: '#ffbe76' },
  ];
  const cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push(
      <View
        key={i}
        style={[styles.cards, { backgroundColor: colors[i].value }]}
      >
        <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
          {colors[i].name} Card
        </Text>
      </View>,
    );
  }
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
        {cards}
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
