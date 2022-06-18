import { useEffect } from "react";
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from "axios";

import * as commons from './Commons';
import useRestaurant from "../hooks/useRestaurant";

export interface IRestaurant {
  id: string,
  name: string,
  price: number | null,
  quality: number | null,
  image_url: string,
}

interface Props {
  id: string
}

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = Math.round(imageWidth * 9 / 16);


const Restaurant = (props: Props) => {

  const [result, searchRestaurant] = useRestaurant();

  useEffect(() => {

    searchRestaurant(props.id);

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

  if (result.restaurant) {
    return (
      <View style={styles.detailsContainer}>
        <Image style={styles.image} source={{ uri: result.restaurant.image_url }}></Image>
        <Text style={styles.name}>{result.restaurant.name}</Text>
        <View style={styles.propertiesContainer}>
          <View style={styles.propertyContainer}>
            <Text style={styles.label}>Rating:</Text>
            {result.restaurant.quality ?
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
                rating={result.restaurant.quality}
                fullStarColor={'#ffd700'} // gold 
                halfStarColor={'#ffd700'} // gold 
                emptyStarColor={'#d3d3d3'} // lightgrey
              />
              :
              <View style={styles.noInfoRow}>
                <Text style={styles.noInfoText}>no</Text>
                <Icon style={styles.noInfoIcon} name='star' color='gold' />
                <Text style={styles.noInfoText}>-info </Text>
              </View>
            }
          </View>
          <View style={styles.propertyContainer}>
            <Text style={styles.label}>Price Level:</Text>
            {result.restaurant.price ?
              <StarRating
                containerStyle={styles.ratingContainer}
                disabled={true}
                emptyStar={'euro'}
                fullStar={'euro'}
                starSize={18}
                iconSet={'MaterialIcons'}
                maxStars={3}
                rating={result.restaurant.price}
                fullStarColor={'#ffd700'} // gold 
                emptyStarColor={'#d3d3d3'} // lightgrey
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
    )
  }

  return (
    <View style={styles.detailsContainer}>
      <Text>no details</Text>
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
  detailsContainer: {
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  name: {
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10
  },
  propertiesContainer: {
    marginLeft: 10
  },
  propertyContainer: {
    flexDirection: 'row'
  },
  ratingContainer: {
    justifyContent: 'flex-start'
  },
  label: {
    width:'30%',
    fontSize: 14
  },
  property: {
    width:'70%'
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
  address: {
    marginLeft: 10
  },

})

export default Restaurant;