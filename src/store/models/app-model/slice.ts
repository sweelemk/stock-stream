import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AuthProviderState } from './types';

const initialState: AuthProviderState = {
  isAppLoading: true,
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    }
  }
});

export const { reducer: appReducer, actions: appActions } = slice;