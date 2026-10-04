export interface AuthState {
    user: null | { id: string; name: string; email: string };
    token: null | string;
    isLoggedIn: boolean;
  }
  
  export const initialAuthState: AuthState = {
    user: null,
    token: null,
    isLoggedIn: false,
  };