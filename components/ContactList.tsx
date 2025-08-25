import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'User1',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj33EDsXAtbzO0kXGNInDbCtxujgrfqSYTg&s',
      about: 'Judge me when you are perfect',
    },
    {
      uid: 2,
      name: 'User2',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HLR4EfXiN_hZM3xov_Top-r53JyfbnUjqw&s',
      about:
        'Be the change you want to see in the world" or "Life is a beautiful struggle',
    },
    {
      uid: 3,
      name: 'User3',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpnXk1oa8W4SEJU4W30Unwzrib5Wqj-1wEA&s',
      about: 'Smile, because you are alive',
    },
    {
      uid: 4,
      name: 'User4',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1uJ5byexOpS16QrfKv3l443V1IfETXouLA&s',
      about: 'Small steps every day',
    },
    {
      uid: 5,
      name: 'User5',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcB7RMqhPFj6eS28XhfQtDpZSWeCsBo2DyKQ&s',
      about: 'Expect nothing, be grateful for everything',
    },
    {
      uid: 6,
      name: 'User6',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fErJgCrN-rggJUTy1oWXvGFE3OUR8JzIQQ&s',
      about:
        'Dont Change So People Will Like You. Be Yourself and The Right People Will Love the Real You',
    },
    {
      uid: 7,
      name: 'User7',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRen-R0pCKLQvZ6DLQOs58F6gDifujLyxqu1w&s',
      about: 'I hate Maths, but I love counting money.',
    },
  ];
  return (
    <View style={[styles.mainView]}>
      <Text style={[styles.headingText]}>Contact List</Text>
      <ScrollView
        horizontal={true}
        nestedScrollEnabled={true}
        contentContainerStyle={[styles.horizontalContactLiist]}
        showsHorizontalScrollIndicator={false}
      >
        {contacts.map(({ uid, imageUrl }) => (
          <View key={uid} style={[styles.HorizontalListDP]}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={{ height: 60, width: 60, borderRadius: 30 }}
            />
          </View>
        ))}
      </ScrollView>
      <ScrollView
        style={{ height: 310 }}
        scrollEnabled={true}
        nestedScrollEnabled={true}
      >
        {contacts.map(
          (
            { uid, name, imageUrl, about }, //destructured the parameters names
          ) => (
            <View key={uid} style={[styles.contactList]}>
              <TouchableHighlight
                underlayColor="#dfe4ea"
                onPress={() => {}}
                style={[
                  { flex: 1 },
                  // styles.border
                ]}
              >
                <View style={[styles.contactRow]}>
                  <Image
                    source={{
                      uri: imageUrl,
                    }}
                    style={[styles.DP]}
                  />

                  <View
                    style={[
                      styles.userInfoContainer,
                      // styles.border
                    ]}
                  >
                    <View style={[styles.useInfo]}>
                      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        {name}
                      </Text>
                    </View>
                    <View>
                      <Text numberOfLines={1}>{about}</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          ),
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  //A Json Object
  border: { borderWidth: 2, borderColor: 'red' },
  mainView: { margin: 8 },
  headingText: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
  horizontalContactLiist: {
    margin:4,
    marginBottom:12,
  },
  HorizontalListDP:{marginHorizontal:6},
  contactList: {},
  contactRow: { flexDirection: 'row', marginBottom: 14 },
  DP: {
    height: 60,
    width: 60,
    borderRadius: 30, //to make a circle(to look like a logo) borderRadius should be half of the width=>width/2
    marginRight: 14,
  },
  userInfoContainer: {
    // marginLeft: 12,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  useInfo: {},
});

export default ContactList;
