import axios from 'axios';

import { YELP_API_TOKEN } from '@env';

export interface IBusiness {
  id: string,
  name: string,
  price: string,
  rating: string,
  image_url: string,
}

const yelp = () => {

  return axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
      Authorization: 'Bearer ' + YELP_API_TOKEN
    }
  })

}

export default yelp();
