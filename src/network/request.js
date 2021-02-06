import axios from 'axios';

export function request() { // eslint-disable-line
  return axios.get('/public/mock/city.json');
}
