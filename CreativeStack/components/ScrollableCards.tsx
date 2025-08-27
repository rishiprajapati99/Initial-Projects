import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';

const ScrollableCards = () => {
  const backgroundcolor = useColorScheme() === 'dark' ? '#000' : '#fff';
  const textColor = useColorScheme() === 'dark' ? '#fff' : '#000';
  const colors = [
    { id: 1, name: 'Red', value: '#ef1010ff' },
    { id: 2, name: 'Yellow', value: '#f6e58d' },
    { id: 3, name: 'Peach', value: '#ffbe76' },
    { id: 4, name: 'Orange', value: '#e74c3c' },
    { id: 5, name: 'Gold', value: '#f1c40f' },
    { id: 6, name: 'Crimson', value: '#e74c3c' },
    { id: 7, name: 'Silver', value: '#bdc3c7' },
    { id: 8, name: 'Orchid', value: '#8e44ad' },
    { id: 9, name: 'Olive', value: '#4d510bff' },
    { id: 10, name: 'Grey', value: '#747d8c' },
  ];
  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(
      <View
        key={colors[i].id}
        style={[styles.cards, { backgroundColor: colors[i].value }]}
      >
        <Text style={[{ color: textColor }]}>
          {colors[i].name} Card
        </Text>
      </View>,
    );
  }
  return (
    <View
      style={[
        {
          // backgroundColor: backgroundcolor,
          //   flex: 1,
          //   height: 'auto',
        },
        // styles.border,
      ]}
    >
      <Text style={[styles.headingText]}>ScrollableCards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} //this hides the HorizontalScroll indicator
        // scrollEnabled={false}//can be used to temporary disable the scroll
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
