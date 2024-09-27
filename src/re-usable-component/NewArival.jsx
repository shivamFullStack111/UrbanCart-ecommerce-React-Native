import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {gray} from '../utils';

const NewArival = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Arrival</Text>
      <ScrollView horizontal>
        <View style={styles.activeCategory}>
          <Text style={styles.activeText}>All</Text>
        </View>

        <View style={styles.inactiveCategory}>
          <Text style={styles.inactiveText}>Child</Text>
        </View>
        <View style={styles.inactiveCategory}>
          <Text style={styles.inactiveText}>Man</Text>
        </View>
        <View style={styles.inactiveCategory}>
          <Text style={styles.inactiveText}>Women</Text>
        </View>
        <View style={styles.inactiveCategory}>
          <Text style={styles.inactiveText}>All</Text>
        </View>
        <View style={styles.inactiveCategory}>
          <Text style={styles.inactiveText}>Dresses</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  heading: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
  },
  activeCategory: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: 'black',
    marginTop: 10,
    marginRight: 10,
  },
  inactiveCategory: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: gray.light,
    marginTop: 10,
    marginRight: 10,
  },
  activeText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  inactiveText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
});

export default NewArival;
