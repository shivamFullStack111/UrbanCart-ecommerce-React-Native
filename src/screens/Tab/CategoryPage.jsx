import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {gray, wp} from '../../utils';

const CategoryPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Category</Text>
        <FontAwesomeIcon size={wp(6)} icon={faMagnifyingGlass} />
      </View>

      <View style={styles.introTextContainer}>
        <Text style={styles.introText}>Heyy! Select your choice</Text>
        <Text style={styles.introText}>that you want to buy</Text>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <View style={styles.categoryImageContainer}>
            <Image
              style={styles.categoryImage}
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1689371958563-ffed4050bea7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nJTIwYnJhbmQlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
              }}
            />
          </View>
          <Text style={styles.categoryText}>Child</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <View style={styles.categoryImageContainer}>
            <Image
              style={styles.categoryImage}
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1689371958563-ffed4050bea7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nJTIwYnJhbmQlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
              }}
            />
          </View>
          <Text style={styles.categoryText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <View style={styles.categoryImageContainer}>
            <Image
              style={styles.categoryImage}
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1689371958563-ffed4050bea7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nJTIwYnJhbmQlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
              }}
            />
          </View>
          <Text style={styles.categoryText}>Men</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.collectionContainer}>
        <Text style={styles.collectionHeader}>Discover latest collection</Text>
        <View style={styles.collectionGrid}>
          <ImageBackground
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmclMjBicmFuZCUyMHdvbWVufGVufDB8fDB8fHww',
            }}
            style={styles.collectionItem}>
            <View style={styles.collectionOverlay}>
              <Text style={styles.collectionText}>
                Jackets{' '}
                <Text style={styles.collectionItemCount}>(23 items)</Text>
              </Text>
            </View>
          </ImageBackground>

          {/* Repeated ImageBackground Views */}
          <ImageBackground
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmclMjBicmFuZCUyMHdvbWVufGVufDB8fDB8fHww',
            }}
            style={styles.collectionItem}>
            <View style={styles.collectionOverlay}>
              <Text style={styles.collectionText}>
                Jackets{' '}
                <Text style={styles.collectionItemCount}>(23 items)</Text>
              </Text>
            </View>
          </ImageBackground>

          {/* Repeat for additional ImageBackgrounds as needed */}
          <ImageBackground
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmclMjBicmFuZCUyMHdvbWVufGVufDB8fDB8fHww',
            }}
            style={styles.collectionItem}>
            <View style={styles.collectionOverlay}>
              <Text style={styles.collectionText}>
                Jackets{' '}
                <Text style={styles.collectionItemCount}>(23 items)</Text>
              </Text>
            </View>
          </ImageBackground>

          <ImageBackground
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmclMjBicmFuZCUyMHdvbWVufGVufDB8fDB8fHww',
            }}
            style={styles.collectionItem}>
            <View style={styles.collectionOverlay}>
              <Text style={styles.collectionText}>
                Jackets{' '}
                <Text style={styles.collectionItemCount}>(23 items)</Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(2.5),
    backgroundColor: 'white',
    elevation: 3,
    paddingVertical: wp(3.75),
  },
  headerText: {
    color: 'black',
    fontWeight: '600',
    fontSize: wp(4.75),
  },
  introTextContainer: {
    padding: wp(2.5),
    marginTop: wp(2.5),
  },
  introText: {
    fontWeight: '600',
    fontSize: wp(4.75),
    color: gray.dim,
  },
  categoryContainer: {
    flexDirection: 'row',
    gap: wp(2.5),
    justifyContent: 'center',
    marginTop: wp(5),
  },
  categoryButton: {
    alignItems: 'center',
  },
  categoryImageContainer: {
    width: wp(30),
    height: wp(30),
    borderWidth: wp(0.25),
    borderRadius: wp(50),
  },
  categoryImage: {
    flex: 1,
    borderRadius: wp(50),
  },
  categoryText: {
    color: 'black',
    fontWeight: '500',
    fontSize: wp(4.5),
    marginTop: wp(2.5),
    backgroundColor: gray.light,
    paddingHorizontal: wp(4.5),
    paddingVertical: wp(0.75),
  },
  collectionContainer: {
    padding: wp(2.5),
  },
  collectionHeader: {
    fontWeight: '600',
    fontSize: wp(5),
    color: gray.dim,
    marginTop: wp(2.5),
  },
  collectionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp(4),
    paddingHorizontal: wp(2),
    marginTop: wp(2.5),
  },
  collectionItem: {
    width: wp(43),
    height: wp(60),
    justifyContent: 'flex-end',
  },
  collectionOverlay: {
    width: wp(38),
    height: wp(20),
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(4),
  },
  collectionText: {
    color: 'white',
    fontWeight: '700',
    fontSize: wp(4.5),
  },
  collectionItemCount: {
    fontWeight: '500',
    fontSize: wp(3.5),
  },
});

export default CategoryPage;
