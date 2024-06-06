import { BASE_URL } from '@/constants/api';
import axios from 'axios';

axios.defaults.timeout = 5000;

export const publicInstance = axios.create({
  baseURL: BASE_URL,
});
