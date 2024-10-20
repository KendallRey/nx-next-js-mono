import { createSlice } from '@reduxjs/toolkit';
import {
  clearFormErrorAction,
  editFormAction,
  editFormErrorAction,
  IReduxFormState,
  setFormAction,
  setFormErrorAction,
} from '@nx-next-js-micro/services';
import { REDUX } from '../../constants/slice';
import { string, z } from 'zod';

export const ReservationFormSchema = z.object({
  start_date: string().optional(),
  end_date: string().optional(),
});

export type IReservationFormSchema = z.infer<typeof ReservationFormSchema>;

type IReservationFormSliceState = IReduxFormState<IReservationFormSchema>;

const INITIAL_STATE: IReservationFormSliceState = {};

const reservationFormSlice = createSlice({
  name: REDUX.SLICE.RESERVATION_FORM,
  initialState: INITIAL_STATE,
  reducers: {
    setReservationForm: setFormAction<IReservationFormSliceState>,
    editReservationForm: editFormAction<IReservationFormSliceState>,
    setReservationFormError: setFormErrorAction<IReservationFormSliceState>,
    editReservationFormError: editFormErrorAction<IReservationFormSliceState>,
    clearReservationFormError: clearFormErrorAction<IReservationFormSliceState>,
    clearReservationForm: () => INITIAL_STATE,
  },
});

export const {
  setReservationForm,
  editReservationForm,
  setReservationFormError,
  editReservationFormError,
  clearReservationFormError,
  clearReservationForm,
} = reservationFormSlice.actions;

export default reservationFormSlice.reducer;
