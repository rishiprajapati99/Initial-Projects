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
        showsHorizontalScrollIndicator={false}//this hides the scroll indicator
        contentContainerStyle={[
          { padding: 4 },
          // styles.border
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
        <View style={[styles.cards, { backgroundColor: '#e74c3c' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Red-Orange
          </Text>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#f1c40f' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Gold Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#e74c3c' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Crimson Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#bdc3c7' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Silver Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#8e44ad' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Dark Orchid
          </Text>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#4d510bff' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Olive Drab
          </Text>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Card
          </Text>
        </View>
        <View style={[styles.cards, { backgroundColor: '#ed850eff' }]}>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Dark Orange
          </Text>
          <Text style={[{ color: mode === 'dark' ? 'white' : 'black' }]}>
            Card
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
