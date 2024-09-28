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
    padding: 10,
    backgroundColor: 'white',
    elevation: 3,
    paddingVertical: 20,
  },
  headerText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
  introTextContainer: {
    padding: 10,
    marginTop: 5,
  },
  introText: {
    fontWeight: '600',
    fontSize: 18,
    color: gray.dim,
  },
  categoryContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  categoryButton: {
    alignItems: 'center',
  },
  categoryImageContainer: {
    width: 100,
    height: 100,
    borderRadius: wp(50),
  },
  categoryImage: {
    flex: 1,
    borderRadius: 200,
  },
  categoryText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    marginTop: wp(2.5),
    backgroundColor: gray.extraLight,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  collectionContainer: {
    padding: 10,
  },
  collectionHeader: {
    fontWeight: '600',
    fontSize: 20,
    color: gray.dim,
    marginTop: 5,
  },
  collectionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  collectionItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
  },
  collectionOverlay: {
    width: '90%',
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: '5%',
    marginBottom: 10,
  },
  collectionText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  collectionItemCount: {
    fontWeight: '500',
    fontSize: 14,
  },
});

export default CategoryPage;
