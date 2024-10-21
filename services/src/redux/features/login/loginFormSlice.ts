import {
  clearFormErrorAction,
  editFormAction,
  editFormErrorAction,
  setFormAction,
  setFormErrorAction,
} from '../../helper/action';
import { createSlice } from '@reduxjs/toolkit';
import { REDUX } from '../../constant/slice';
import { IReduxFormState } from '../../types/redux';

type ILoginFormSliceState = IReduxFormState<{}>;

const INITIAL_STATE: ILoginFormSliceState = {};

const loginFormSlice = createSlice({
  name: REDUX.SLICE.LOGIN_FORM,
  initialState: INITIAL_STATE,
  reducers: {
    setLoginForm: setFormAction<ILoginFormSliceState>,
    editLoginForm: editFormAction<ILoginFormSliceState>,
    setLoginFormError: setFormErrorAction<ILoginFormSliceState>,
    editLoginFormError: editFormErrorAction<ILoginFormSliceState>,
    clearLoginFormError: clearFormErrorAction<ILoginFormSliceState>,
    clearLoginForm: () => INITIAL_STATE,
  },
});

export const {
  setLoginForm,
  editLoginForm,
  setLoginFormError,
  editLoginFormError,
  clearLoginFormError,
  clearLoginForm,
} = loginFormSlice.actions;

export default loginFormSlice.reducer;
