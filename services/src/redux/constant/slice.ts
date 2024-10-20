import { FORM_SLICE, SKIP_KEYS } from './form-slice';

const REDUX_SLICE = {
  SAMPLE: 'sample-slice',
  AUTH: 'auth-slice',
  ...FORM_SLICE,
} as const;

const REDUX_API = {
  SAMPLE: 'sample-api',
  TAGS: {
    SAMPLE_LIST: 'sample-api-list',
    SAMPLE_ID: 'sample-api-id',
  },
} as const;

export const REDUX = {
  FIELD: {
    KEY: '_latestKey',
    SKIPS: SKIP_KEYS,
  },
  SLICE: REDUX_SLICE,
  API: REDUX_API,
} as const;
