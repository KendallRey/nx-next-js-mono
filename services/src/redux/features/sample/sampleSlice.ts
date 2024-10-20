import { REDUX } from '@/redux/constant/slice';
import { createSlice } from '@reduxjs/toolkit';

const sampleSlice = createSlice({
  name: REDUX.SLICE.SAMPLE,
  initialState: {},
  reducers: {},
});

export default sampleSlice.reducer;
