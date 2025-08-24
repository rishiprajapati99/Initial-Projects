import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';

const ScrollableCards = () => {
  const mode = useColorScheme();
  const colors = [
    '#ef1010ff',
    '#f6e58d',
    '#ffbe76',
    '#e74c3c',
    '#f1c40f',
    '#e74c3c',
    '#bdc3c7',
    '#8e44ad',
    '#4d510bff',
    '#747d8c',
  ];
  const names = [
    'Red',
    'Yellow',
    'Peach',
    'Orange',
    'Gold',
    'Crimson',
    'Silver',
    'Orchid',
    'Olive',
    'Grey',
  ];
  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(
      <View key={i} style={[styles.cards, { backgroundColor: colors[i] }]}>
        <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
          {names[i]} Card
        </Text>
      </View>,
    );
  }
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
      <Text style={[styles.headingText]}>ScrollableCards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} //this hides the scroll indicator
        contentContainerStyle={[
          { padding: 4 },
          // styles.border
        ]}
      >
        {cards}
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
    marginHorizontal: 8,
  },
  cards: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 6,
    // padding: 8,
    marginHorizontal: 8,
    // borderWidth:2,
    // borderColor:'red',
    marginBottom: 4,
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    // shadowOpacity:12,
    shadowColor: 'red',
  },
});

export default ScrollableCards;
