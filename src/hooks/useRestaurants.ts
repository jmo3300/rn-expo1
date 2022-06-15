import { AxiosError } from 'axios';
import { useState } from 'react';
import axios from 'axios';

import yelp, { IBusiness } from '../api/yelp';
import { IRestaurant } from '../components/Restaurant';

export interface IRestaurantsResult {
  restaurants: IRestaurant[] | null,
  loading: boolean,
  error: AxiosError | Error | null
}

const useRestaurants = () => {

  const [RestaurantsResult, setRestaurantsResult] = useState<IRestaurantsResult>({ restaurants: null, loading: false, error: null })

    const searchRestaurants = async (term: string) => {

      setRestaurantsResult
        ({
          restaurants: null,
          loading: true,
          error: null
        })
  
      try {
  
        const response = await yelp.get('/search',
          {
            params: {
              location: 'Hamburg',
              term,
              limit: '50'
            }
          })
  
        // console.log(JSON.stringify(response.data.businesses));
  
        const restaurants = response.data.businesses.map((business: IBusiness) => ({
          id: business.id,
          name: business.name,
          image_url: business.image_url,
          price: (business.price ? (business.price === '€€€' ? 3 : (business.price === '€€' ? 2 : (business.price === '€' ? 1 : null))) : null),
          quality: Number(business.rating)
        })
        )
  
        setRestaurantsResult
          ({
            restaurants,
            loading: false,
            error: null
          })
  
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setRestaurantsResult
            ({
              restaurants: null,
              loading: false,
              error: error
            })
        } else {
          setRestaurantsResult
            ({
              restaurants: null,
              loading: false,
              error: new Error(JSON.stringify(error))
            })
        }
      }
    }
  
    return [RestaurantsResult, searchRestaurants] as const
  }

export default useRestaurants