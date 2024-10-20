import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { REDUX } from '../../constant/slice';

const INITIAL_STATE = {
  access: '',
};

const authSlice = createSlice({
  name: REDUX.SLICE.AUTH,
  initialState: INITIAL_STATE,
  reducers: {
    setAuth: (state, action) => {
      const { payload } = action;
      state = payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.access = payload || state.access;
    },
    clearAuth: () => {
      return INITIAL_STATE;
    },
  },
});

export const { setAuth, clearAuth, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
