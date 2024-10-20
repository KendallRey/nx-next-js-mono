import { createSlice } from '@reduxjs/toolkit';
import { REDUX } from '../../constant/slice';

const sampleSlice = createSlice({
  name: REDUX.SLICE.SAMPLE,
  initialState: {},
  reducers: {},
});

export default sampleSlice.reducer;
