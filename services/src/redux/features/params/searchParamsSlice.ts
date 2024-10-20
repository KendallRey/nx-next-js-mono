import API from '../../constant/API';
import { createSlice } from '@reduxjs/toolkit';
import { clearAction, setAction } from '../../helper/action';
import { REDUX } from '../../constant/slice';

type ISearchParamsSlice = {
  [API.PARAMS.KEYS.PREVIEW]?: string;
  [API.PARAMS.KEYS.ACTION]?: string;
};

const INITIAL_STATE: ISearchParamsSlice = {};

const searchParamsSlice = createSlice({
  name: REDUX.SLICE.SAMPLE,
  initialState: INITIAL_STATE,
  reducers: {
    setSearchParamsPreview: setAction<ISearchParamsSlice, string>(
      API.PARAMS.KEYS.PREVIEW
    ),
    clearSearchParamsPreview: clearAction(
      API.PARAMS.KEYS.PREVIEW,
      INITIAL_STATE[API.PARAMS.KEYS.PREVIEW]
    ),
  },
});

export const { setSearchParamsPreview, clearSearchParamsPreview } =
  searchParamsSlice.actions;

export default searchParamsSlice.reducer;
