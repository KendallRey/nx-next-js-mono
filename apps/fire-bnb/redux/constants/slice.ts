import { REDUX as APP_REDUX } from '@nx-next-js-micro/services';

export const REDUX = {
  ...APP_REDUX,
  SLICE: {
    ...APP_REDUX.SLICE,
    RESERVATION_FORM: 'reservation-form-slice',
  },
} as const;
