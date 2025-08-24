import React from 'react';
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
  const openWebsite = (websiteUrl: string) => {
    Linking.openURL(websiteUrl);
  };
  const mode = useColorScheme();
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
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
          }}
        />
        <View style={[styles.cardBody]}>
          <Text
            style={[
              styles.ImageHeading,
              // { color: mode === 'dark' ? 'white' : 'black' },
            ]}
          >
            Hawa Mahal
          </Text>
          <Text
            style={[
              styles.ImageLabel,
              // { color: mode === 'dark' ? 'white' : 'black' },
            ]}
          >
            Located in Jaipur ,The Pink City
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '83%' }}>
              <Text
                style={[
                  styles.ImageDescription,
                  // { color: mode === 'dark' ? 'white' : 'black' },
                ]}
                numberOfLines={1}
              >
                Hawa Mahal, also known as the "Palace of Winds", is a
                distinctive five-story palace in Jaipur
              </Text>
            </View>

            <TouchableOpacity
              onPress={
                () => openWebsite('https://en.wikipedia.org/wiki/Hawa_Mahal') //passed the callBack function(openWebsite) with the website URL
              }
            >
              <Text
                style={[
                  { color: 'blue' },
                  // { color: mode === 'dark' ? 'white' : 'black' },
                ]}
              >
                Read more
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={[
              styles.ImageFooter,
              // { color: mode === 'dark' ? 'white' : 'black' },
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
