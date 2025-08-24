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
    { name: 'Red', value: '#ef1010ff' },
    { name: 'Yellow', value: '#f6e58d' },
    { name: 'Peach', value: '#ffbe76' },
    { name: 'Orange', value: '#e74c3c' },
    { name: 'Gold', value: '#f1c40f' },
    { name: 'Crimson', value: '#e74c3c' },
    { name: 'Silver', value: '#bdc3c7' },
    { name: 'Orchid', value: '#8e44ad' },
    { name: 'Olive', value: '#4d510bff' },
    { name: 'Grey', value: '#747d8c' },
  ];
  const cards = [];
  for (let i = 0; i < 10; i++) {
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
