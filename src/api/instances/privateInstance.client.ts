import { BASE_URL } from '@/constants/api';
import axios from 'axios';
import {
  onRequestClient,
  onResponseErrorClient,
} from '../interceptors/interceptor.client';
import { onResponse } from '../interceptors/interceptor';

export const privateInstance = axios.create({
  baseURL: BASE_URL,
});

privateInstance.interceptors.request.use(onRequestClient);
privateInstance.interceptors.response.use(onResponse, onResponseErrorClient);
