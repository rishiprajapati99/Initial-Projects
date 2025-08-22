import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

const Blogcard = () => {
  const openWebsite = (websiteUrl: string) => {
    Linking.openURL(websiteUrl);
  };
  return (
    <View style={[styles.mainView]}>
      <View style={[styles.headinTextContainer]}>
        <Text style={[styles.headingText]}>Blogcard</Text>
      </View>
      <View style={[styles.ImageContainer]}>
        <Text style={[styles.ImageTitle]}>What's New?</Text>
        <Image
          source={{
            uri: 'https://cdn.dribbble.com/userupload/14918082/file/original-680a48f7f8325b0f5893897665b5d900.jpg?resize=400x0',
          }}
          style={[styles.Image]}
        />

        <View style={[styles.ImageText]}>
          <Text>
            Blog cards serve as the gateway to your content — transforming
            simple article links into visually compelling previews that entice
            readers
          </Text>
          <View style={[styles.footerLinks]}>
            <TouchableOpacity
              onPress={() => openWebsite('https://dribbble.com/tags/blog-card')} //provided the callBack function (openWebsite)
            >
              <Text style={[styles.socialLinks]}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openWebsite('https://github.com/rishiprajapati99')}
            >
              <Text style={[styles.socialLinks]}>Follow Me</Text>
            </TouchableOpacity>
          </View>
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
    fontWeight: 'bold',
    color: 'red',
  },
  headinTextContainer: {
    marginHorizontal: 8,
  },
  mainView: {
    marginTop: 6,
  },
  ImageContainer: {
    marginHorizontal: 12,
    backgroundColor: '#c3edf4ff',
    elevation: 8,
    borderRadius: 8,
  },
  Image: {
    height: 180,
    borderRadius: 8,
    //  elevation: 8,
  },
  ImageText: {
    margin: 10,
  },
  ImageTitle: { fontSize: 20, fontWeight: 'bold', marginHorizontal: 4 },
  footerLinks: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    color: '#ffffff',
    fontSize:15,
    backgroundColor:'#3761fb',
    padding:6,//padding(defination=>space inside the box(view or container(can be <Text>)) and the content(ex text))=>defines the space between content and the border of the box
    borderRadius:15,
    // marginHorizontal:6,//margin =>space between boxes(view) . margin(defination=<space outside of the box(View))
    paddingHorizontal:26,
    borderWidth:1,
    borderColor:'#6f74efff'
  },
});

export default Blogcard;
