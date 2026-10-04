import axios from 'axios';
import { ENV } from '../config/env';
import { STORAGE_KEYS } from '../utils/constants';
import { storage } from './storage';

export const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: ENV.API_TIMEOUT,
  headers: { 'Content-Type': 'application/json' },
});

// Request interceptor — attach auth token
api.interceptors.request.use(
  async (config) => {
    const token = await storage.get(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor — handle errors globally
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await storage.remove(STORAGE_KEYS.AUTH_TOKEN);
      // TODO: Navigate to login (use navigationRef)
    }
    return Promise.reject(error);
  },
);