import { AxiosError } from 'axios';
import { useState } from 'react';
import axios from 'axios';

import yelp, { IBusiness } from '../api/yelp';
import { IRestaurant } from '../components/Restaurant';


export interface IRestaurantResult {
  restaurant: IRestaurant | null,
  loading: boolean,
  error: AxiosError | Error | null
}

const useRestaurant = (id: string) => {

  const [RestaurantResult, setRestaurantResult] = useState<IRestaurantResult>({ restaurant: null, loading: false, error: null })

  const searchRestaurant = async (id: string) => {

    setRestaurantResult
      ({
        restaurant: null,
        loading: true,
        error: null
      })

    try {

      const response = await yelp.get<IBusiness>(`/${id}`)

      const restaurant: IRestaurant =
      {
        id: response.data.id,
        name: response.data.name,
        image_url: response.data.image_url,
        price: (response.data.price ? (response.data.price === '€€€' ? 3 : (response.data.price === '€€' ? 2 : (response.data.price === '€' ? 1 : null))) : null),
        quality: Number(response.data.rating)
      }

      setRestaurantResult
        ({
          restaurant,
          loading: false,
          error: null
        })

    } catch (error) {

      if (axios.isAxiosError(error)) {
        setRestaurantResult
          ({
            restaurant: null,
            loading: false,
            error: error
          })
      } else {
        setRestaurantResult
          ({
            restaurant: null,
            loading: false,
            error: new Error(JSON.stringify(error))
          })
      }

    }

  }

  return [RestaurantResult, searchRestaurant] as const

}

export default useRestaurant;
