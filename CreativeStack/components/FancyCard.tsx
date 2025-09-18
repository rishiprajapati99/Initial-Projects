import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  Linking,
} from 'react-native';

const FancyCard = () => {
  const [Numberoflines, setNumberoflines] = useState(1);
  const [ReadmoreVisibility, setReadmoreVisibility] = useState(false);
  const openWebsite = (websiteUrl: string) => {
    Linking.openURL(websiteUrl);
  };
  const backgroundcolor = useColorScheme() === 'dark' ? '#000' : '#fff';
  const textColor = useColorScheme() === 'dark' ? '#fff' : '#000';
  return (
    <View
      style={
        [
          // styles.border,
          // { flex: 1 },
        ]
      }
    >
      <View
        style={[
          {
            /*styles.border*/
          },
        ]}
      >
        <Text style={styles.headingText}>Trending Places</Text>
      </View>
      <View
        style={[
          {
            /*styles.border,*/
          },
          styles.cardElevated,
          styles.card,
        ]}
      >
        <Image
          style={styles.ImageCard}
          source={{
            uri: 'https://c.ndtvimg.com/gws/ms/6-hawa-mahal-facts-that-will-make-you-look-twice/assets/6.jpeg?1752136015',
          }}
        />
        <View style={[styles.cardBody]}>
          <Text
            style={[
              styles.ImageHeading,
              // { color: textColor },
            ]}
          >
            Hawa Mahal
          </Text>
          <Text
            style={[
              styles.ImageLabel,
              // { color: textColor },
            ]}
          >
            Located in Jaipur ,The Pink City
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '81%' }}>
              <Text
                style={[
                  styles.ImageDescription,
                  // { color:textColor },
                ]}
                numberOfLines={Numberoflines}
              >
                The Hawa Mahal, or "Palace of Winds," is a striking, five-story
                pink sandstone palace in Jaipur, India, built in 1799 for royal
                ladies to observe city life discreetly.
              </Text>
            </View>

           {!ReadmoreVisibility?
            <TouchableOpacity
              onPress={() => {
                setNumberoflines(3);
                setReadmoreVisibility(true);
              }}
              disabled={ReadmoreVisibility}
            >
              <Text
                style={[
                  { color: 'blue' },
                  // { color: textColor },
                ]}
              >
                Read more
              </Text>
            </TouchableOpacity>
           :null}
          </View>
          <Text
            style={[
              styles.ImageFooter,
              // { color: textColor },
            ]}
          >
            12 mins away
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
  ImageCard: {
    height: 270,
    // width:490,
    // borderRadius: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ImageHeading: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ImageLabel: {
    color: 'black',
    fontSize: 18,
  },
  ImageDescription: {
    color: 'black',
    fontSize: 13,
  },
  ImageFooter: {
    color: 'black',
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 4,
  },
  card: {
    // width: 490,
    marginHorizontal: 12,
    borderRadius: 10,
    // borderTopLeftRadius:10,
  },
  cardBody: {
    // flex: 1,
    // flexGrow: 1,
    paddingHorizontal: 5,
  },
});

export default FancyCard;
