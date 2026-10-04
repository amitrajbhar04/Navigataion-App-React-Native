import { NavigatorScreenParams } from '@react-navigation/native';

// --- Home Stack ---
export type HomeStackParamList = {
  Home: undefined;
  ProductDetails: { productId: string; title: string };
};

// --- Search Stack ---
export type SearchStackParamList = {
  Search: undefined;
  SearchResults: { query: string };
};

// --- Notifications Stack ---
export type NotificationsStackParamList = {
  Notifications: undefined;
  NotificationDetail: { id: string; title: string };
};

// --- Profile Stack ---
export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: { userId: string };
  Settings: undefined;
};

// --- Bottom Tabs ---
export type TabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  SearchTab: NavigatorScreenParams<SearchStackParamList>;
  NotificationsTab: NavigatorScreenParams<NotificationsStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

// --- Root Stack ---
export type RootStackParamList = {
  Auth: undefined;
  MainTabs: NavigatorScreenParams<TabParamList>;
};

// --- Global declaration for useNavigation typing ---
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}