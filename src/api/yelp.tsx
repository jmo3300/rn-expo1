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

  // const authorizationJWT = 'YePFgGv7JYVV8tt-wusxZTlnVDj7RNHLZGNpyRylyWo-HqWiyV9KOYKcscnBFH1sW-9JH8vH9YBHyGpMTGFOyBQv6IHfPU4MJQ5Ycw8kfcw3q4ZBhFICFuCXmWWfYnYx'
  const authorizationJWT = YELP_API_TOKEN;

  return axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
      Authorization: 'Bearer ' + authorizationJWT
    }
  })

}

export default yelp();
