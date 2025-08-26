import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const FlatCards = () => {
  const backgroundcolor = useColorScheme() === 'dark' ? '#000' : '#fff';
  const textColor = useColorScheme() === 'dark' ? '#fff' : '#000';
  const colors = [
    { id: 1, name: 'Red', value: '#ef1010ff' },
    { id: 2, name: 'Yellow', value: '#f6e58d' },
    { id: 3, name: 'Peach', value: '#ffbe76' },
  ];
  const cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push(
      <View
        key={colors[i].id} //set a unique key so that even if order of elements change still React will be able to detect the same element during any change
        style={[styles.cards, { backgroundColor: colors[i].value }]}
      >
        <Text style={[{ color: textColor }]}>{colors[i].name} Card</Text>
      </View>,
    );
  }
  return (
    <View
      style={[
        {
          // backgroundColor: backgroundcolor,
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
  //A Json Object
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
