import {View, Text, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const Slide = () => {
  return (
    <View>
      <ScrollView style={{marginTop: 10}} horizontal>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1635715226585-004fef5a55a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmclMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={{width: 220, height: 160, borderWidth: 1}}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1723218628337-df1bd8e87bf1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={{width: 220, height: 160, borderWidth: 1}}
          />
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmclMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={{width: 220, height: 160, borderWidth: 1}}
          />
        </View>
      </ScrollView>
      <ScrollView style={{marginTop: 10}} horizontal>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1722005865240-eecdbec17347?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmclMjBicmFuZHxlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={{width: 170, height: 140, borderWidth: 1}}
          />
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1726741693498-1c29f7d83e15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D',
            }}
            style={{width: 170, height: 140, borderWidth: 1}}
          />
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1673356302439-fa5252f45abb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D',
            }}
            style={{width: 170, height: 140, borderWidth: 1}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Slide;
