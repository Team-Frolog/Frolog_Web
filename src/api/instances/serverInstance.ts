import { BASE_URL } from '@/constants/api';
import axios from 'axios';
import { onResponse } from '../interceptors/interceptor';
import {
  onRequestServer,
  onResponseErrorServer,
} from '../interceptors/interceptor.server';

export const serverInstance = axios.create({
  baseURL: BASE_URL,
});

serverInstance.interceptors.request.use(onRequestServer);
serverInstance.interceptors.response.use(onResponse, onResponseErrorServer);
