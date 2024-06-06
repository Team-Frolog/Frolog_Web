import { BASE_URL } from '@/constants/api';
import axios from 'axios';
import {
  onRequestClient,
  onResponseErrorClient,
} from '../interceptors/interceptor.client';
import { onResponse } from '../interceptors/interceptor';

export const clientInstance = axios.create({
  baseURL: BASE_URL,
});

clientInstance.interceptors.request.use(onRequestClient);
clientInstance.interceptors.response.use(onResponse, onResponseErrorClient);
