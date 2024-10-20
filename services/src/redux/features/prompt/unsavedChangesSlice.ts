import { createSlice } from '@reduxjs/toolkit';
import { clearFieldAction, setFieldAction } from '../../helper/action';

type IUnsavedChangesSliceState = {
  state: object;
};

const INITIAL_STATE: Partial<IUnsavedChangesSliceState> = {};

export const UNSAVED_CHANGES_SLICE = {
  NAME: 'unsaved-changes-slice',
} as const;

const unsavedChangesSlice = createSlice({
  name: UNSAVED_CHANGES_SLICE.NAME,
  initialState: INITIAL_STATE,
  reducers: {
    setInitialState: setFieldAction('state'),
    clearInitialState: clearFieldAction(INITIAL_STATE, 'state'),
  },
});

export const { setInitialState, clearInitialState } =
  unsavedChangesSlice.actions;
export default unsavedChangesSlice.reducer;
