import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from "axios";

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as commons from './Commons';
import { RootStackParamsList } from "../../App";
import { IRestaurant } from "./Restaurant";
import useRestaurants from '../hooks/useRestaurants';

const Restaurants = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
  // error solved, see: https://stackoverflow.com/questions/68667766/react-native-typescript-string-is-not-assignable-to-parameter-of-type-never

  const [result, searchRestaurants] = useRestaurants();

  const Restaurant = ({ restaurant }: { restaurant: IRestaurant }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Restaurant', { id: restaurant.id });
      }}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: restaurant.image_url }}></Image>
        <View style={styles.details}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.ratings}>
            <View style={styles.quality}>
              {restaurant.quality ?
                <StarRating
                  containerStyle={styles.ratingContainer}
                  disabled={true}
                  emptyStar={'star-outline'}
                  fullStar={'star'}
                  halfStar={'star-half'}
                  halfStarEnabled
                  starSize={20}
                  iconSet={'MaterialIcons'}
                  maxStars={5}
                  rating={restaurant.quality}
                  fullStarColor={'gold'}
                  halfStarColor={'gold'}
                  emptyStarColor={'lightgrey'}
                />
                :
                <View style={styles.noInfoRow}>
                  <Text style={styles.noInfoText}>no</Text>
                  <Icon style={styles.noInfoIcon} name='star' color='gold' />
                  <Text style={styles.noInfoText}>-info </Text>
                </View>
              }
            </View>
            <View style={styles.price}>
              {restaurant.price ?
                <StarRating
                  containerStyle={styles.ratingContainer}
                  disabled={true}
                  emptyStar={'euro'}
                  fullStar={'euro'}
                  starSize={18}
                  iconSet={'MaterialIcons'}
                  maxStars={3}
                  rating={restaurant.price}
                  fullStarColor={'gold'}
                  emptyStarColor={'lightgrey'}
                />
                :
                <View style={styles.noInfoRow}>
                  <Text style={styles.noInfoText}>no </Text>
                  <Icon style={styles.noInfoIcon} name='euro' size={18} color='gold' />
                  <Text style={styles.noInfoText}>-info </Text>
                </View>
              }
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity >
  )

  useEffect(() => {
    searchRestaurants('Food');
    // console.log(result);
  }, [])

  if (result.loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  if (result.error) {
    const errorMessage = axios.isAxiosError(result.error) ? result.error.message : JSON.stringify(result.error);
    return (
      <View style={styles.errorContainer}>
        <Text>`Cannot get data due to {errorMessage}`</Text>
      </View>
    )
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={result.restaurants}
        renderItem={({ item }) => <Restaurant restaurant={item} />}
        keyExtractor={(restaurant) => restaurant.id}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  loadingContainer: {
    height: '100%',
    backgroundColor: commons.loadingBackroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorContainer: {
    height: '100%',
    backgroundColor: commons.errorBackroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
  },
  ratingContainer: {
    justifyContent: 'flex-start'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: 10
  },
  details: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  quality: {
    width: 150
  },
  price: {
    width: 150
  },
  noInfoRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  noInfoText: {
    fontSize: 14
  },
  noInfoIcon: {
  },

})

export default Restaurants;