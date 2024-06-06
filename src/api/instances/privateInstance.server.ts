import { BASE_URL } from '@/constants/api';
import axios from 'axios';
import { onResponse } from '../interceptors/interceptor';
import {
  onRequestServer,
  onResponseErrorServer,
} from '../interceptors/interceptor.server';

export const privateInstance = axios.create({
  baseURL: BASE_URL,
});

privateInstance.interceptors.request.use(onRequestServer);
privateInstance.interceptors.response.use(onResponse, onResponseErrorServer);
