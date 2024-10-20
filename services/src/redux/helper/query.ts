import {
  BaseQueryApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { REDUX } from '../constant/slice';
import { formatToLabel } from 'components/src/helper/component';
import { IList, ISearchParams } from '@nx-next-js-micro/components';
import { ApiErrorSchema } from '../schema/api';
import { z } from 'zod';
import { RootState } from '../services/store';

export const GetQueryHeaders = (
  headers: Headers,
  api: Pick<BaseQueryApi, 'type' | 'getState' | 'extra' | 'endpoint' | 'forced'>
) => {
  const { getState } = api;
  const state = getState() as RootState;
  if (state && state.auth.access) {
    headers.set('Authorization', `Bearer ${state.auth.access}`);
  }
  return headers;
};

export const GetBaseFetchQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  prepareHeaders: GetQueryHeaders,
});

/**
 * Transforming Search Params.
 */
export const toQueryString = (
  params: ISearchParams,
  defaultParams?: Record<string, any>
) => {
  const { order, orderBy, [REDUX.FIELD.KEY]: lastKey, ...otherParams } = params;
  const ordering = orderBy ? `${order === 'asc' ? '' : '-'}${orderBy}` : '';
  const newParams = {
    ordering,
    ...defaultParams,
    ...otherParams,
  } as Record<string, any>;
  const queryString = new URLSearchParams(newParams).toString();
  return queryString;
};

// [BE] verify_account_outstanding_balance
type RegistrationData = {
  registration_id: number;
  semester: string;
  outstanding_balance: number;
};

/**
 * Retrieving `outstanding_balance` from Verify Student Balance error.
 */
export const getOutstandingBalance = (
  error: Record<string, RegistrationData>
) => {
  try {
    const key = Object.keys(error)[0];
    return Number(error[key].outstanding_balance);
  } catch {
    return 0;
  }
};

/**
 * Transforming Redux API Response T[] only, to get first object or null.
 */
export const getResponseFirst = <T>(
  returnValue: T[],
  meta: FetchBaseQueryMeta | undefined,
  arg: unknown
) => {
  try {
    return returnValue[0];
  } catch {
    return null;
  }
};

/**
 * Validates a list of responses using the provided Zod schema.
 *
 * This function wraps the input data in an object with a `results` property and validates it against
 * a schema that expects an array of items. If the validation is successful, the validated data is returned.
 * If the validation fails, `null` is returned.
 *
 * @template T - The type of the items in the response list.
 * @param schema - A Zod object schema used to validate each item in the `results` array.
 * @returns A function that validates a response list, which takes the following parameters:
 *  - `returnValue`: The array of items to be validated.
 *  - `meta`: Optional metadata from the fetch query.
 *  - `arg`: Additional arguments for the function.
 *
 * @example
 * ```typescript
 * const userSchema = z.object({
 *   id: z.number(),
 *   name: z.string(),
 * });
 *
 * const validateUsers = validateResponseList(userSchema);
 *
 * const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
 * const result = validateUsers(users, undefined, null);
 * console.log(result); // Returns validated data or null if validation fails
 * ```
 */
export const validateResponseList = <T>(schema: z.ZodObject<any>) => {
  const listSchema = z.object({
    results: z.array(schema),
  });

  const validate = (
    returnValue: IList<T>,
    meta: FetchBaseQueryMeta | undefined,
    arg: unknown
  ) => {
    const responseData = listSchema.safeParse(returnValue);
    if (responseData.success) return responseData.data as IList<T>;
    return {
      total_pages: 1,
      current_page: 1,
      next_page: null,
      previous_page: null,
      count: 0,
      next: null,
      previous: null,
      results: [],
    } as IList<T>;
  };

  return validate;
};

/**
 * Transforming Redux API Response List<T> only, to get first object or null.
 */
export const getListResponseFirst = <T>(
  returnValue: IList<T>,
  meta: FetchBaseQueryMeta | undefined,
  arg: unknown
) => {
  try {
    const { results } = returnValue;
    if (!results.length) return null;
    return results[0];
  } catch {
    return null;
  }
};

/**
 * Transforming Redux API query error response.
 */
export const TransformErrorResponse = (
  returnValue: FetchBaseQueryError,
  meta: FetchBaseQueryMeta | undefined
) => {
  const errorResponseValidation = ApiErrorSchema.safeParse(returnValue.data);
  const errorData = errorResponseValidation.data;

  return {
    status: meta?.response?.status || 400,
    message: errorData?.message || 'Something went wrong',
    detail: errorData?.detail || 'Something went wrong',
    hint: errorData?.hint,
    error: returnValue.data || {},
  };
};

/**
 * Formatting Redux Throw errors response.
 * @param error Error object from try catch block
 */
export const GetApiError = <T = any>(error: unknown) => {
  const errorResponseValidation = ApiErrorSchema.safeParse(error);
  const errorData = errorResponseValidation.data;

  const apiMessage = errorData?.error || {};
  let errors = {} as Record<string, any>;
  let nonFieldErrors: string[] = [];

  Object.keys(errorData?.error || {}).forEach((key) => {
    if (Array.isArray(apiMessage)) return;
    if (typeof apiMessage === 'string') return;
    const err = apiMessage[key];
    if (key === 'non_field_errors' && Array.isArray(err)) {
      nonFieldErrors.push(...err);
    }
    if (typeof err === 'object' && err !== null && 'detail' in err) {
      errors = {
        ...errors,
        [key]: formatToLabel(String(err['detail'])),
      };
      return;
    }
    if (typeof err === 'string') {
      errors = {
        ...errors,
        error_message: formatToLabel(err),
      };
    }
    if (!Array.isArray(err)) return;
    if (!err.length) return;
    errors = {
      ...errors,
      [key]: err[0],
    };
  });

  if (errorData?.status === 500) {
    errors = {
      serverError: 'OOPS! something went wrong',
    };
  }

  let keys: string[] = [];
  if (typeof errorData?.error === 'object')
    keys = Object.keys(errorData?.error || {});

  let detailError = 'Something went wrong';
  let errorMessage = Object.values(errors)
    .filter((err) => !isKeyErrorCode(err))
    .join(', ');

  if (nonFieldErrors.length !== 0) {
    const newNonFieldErrorMessages: string[] = [];
    nonFieldErrors.forEach((err) => {
      if (!errorMessage.includes(err)) newNonFieldErrorMessages.push(err);
    });
    const nonFieldErrorMessage = newNonFieldErrorMessages.join(', ');
    errorMessage = errorMessage.concat(', ', nonFieldErrorMessage);
    detailError = nonFieldErrors.join(', ');
  }

  return {
    code: errorData?.status || 400,
    message: errorData?.message || 'Something went wrong',
    detail: errorData?.detail || errors?.detail || detailError,
    hint: errorData?.hint,
    error: errors,
    errors: errorMessage,
  };
};

/**
 * Formatting Axios Throw errors response.
 * @param error Error object from try catch block
 */
export const GetAxiosApiError = (error: any) => {
  const apiError = ApiErrorSchema.safeParse(error.response?.data);
  const errorData = apiError.data;

  return {
    code: errorData?.status || 400,
    message: errorData?.message || 'Something went wrong',
    detail: errorData?.detail || 'Something went wrong',
    hint: errorData?.hint,
  };
};

/**
 * Checks if a string contains no spaces.
 *
 * @param {string} str - The string to be checked.
 * @returns {boolean} - Returns true if the string contains no spaces, false otherwise.
 */
const isKeyErrorCode = (str: string): boolean => {
  if (typeof str !== 'string') return true;
  const regex = /^\S+$/;
  return regex.test(str);
};
