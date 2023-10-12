import { configureStore } from '@reduxjs/toolkit';
import { appReducer, profileReducer } from './models';
import { authReducer } from 'components/auth-provider/model';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
  },
});