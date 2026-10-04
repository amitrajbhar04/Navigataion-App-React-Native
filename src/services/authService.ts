import { api } from './api';
import { storage } from './storage';
import { STORAGE_KEYS } from '../utils/constants';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const data: AuthResponse = {
      token: 'mock-token-123',
      user: {
        id: '1',
        name: 'John Doe',
        email: payload.email,
        avatar: 'https://i.pravatar.cc/150?u=1',
      },
    };
    await storage.set(STORAGE_KEYS.AUTH_TOKEN, data.token);
    await storage.set(STORAGE_KEYS.USER_DATA, data.user);
    return data;
  },

  async logout(): Promise<void> {
    await storage.remove(STORAGE_KEYS.AUTH_TOKEN);
    await storage.remove(STORAGE_KEYS.USER_DATA);
  },

  async getCurrentUser(): Promise<User | null> {
    return storage.get<User>(STORAGE_KEYS.USER_DATA);
  },

  async getToken(): Promise<string | null> {
    return storage.get<string>(STORAGE_KEYS.AUTH_TOKEN);
  },
};