import { useEffect, useState } from 'react';
import { authService, User } from '../services/authService';
import { storage } from '../services/storage';
import { STORAGE_KEYS } from '../utils/constants';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    bootstrap();
  }, []);

  const bootstrap = async () => {
    try {
      const token = await storage.get<string>(STORAGE_KEYS.AUTH_TOKEN);
      const savedUser = await authService.getCurrentUser();
      if (token && savedUser) {
        setUser(savedUser);
        setIsLoggedIn(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const res = await authService.login({ email, password });
    setUser(res.user);
    setIsLoggedIn(true);
    return res;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setIsLoggedIn(false);
  };

  return { user, isLoggedIn, isLoading, login, logout };
}