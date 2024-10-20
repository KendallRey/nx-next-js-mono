import { REDUX } from '@/redux/constant/slice';
import {
  getBaseFetchQuery,
  toQueryString,
  transformErrorResponse,
} from '@/redux/helper/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const TAGS = [REDUX.API.TAGS.SAMPLE_LIST, REDUX.API.TAGS.SAMPLE_ID];

type ISamplePayload = {
  id: ID;
  data: Record<string, IValue>;
};

export const sampleApi = createApi({
  reducerPath: REDUX.API.SAMPLE,
  baseQuery: getBaseFetchQuery,
  tagTypes: TAGS,
  endpoints: (builder) => ({
    getSampleList: builder.query<unknown, IApiParams>({
      query: (params) => {
        const qs = toQueryString(params);
        return `/api/sample/list?${qs}`;
      },
      transformErrorResponse: transformErrorResponse,
      providesTags: [REDUX.API.TAGS.SAMPLE_LIST],
    }),
    getSampleById: builder.query<unknown, string>({
      query: (id) => `/api/sample/${id}`,
      transformErrorResponse: transformErrorResponse,
      providesTags: [REDUX.API.TAGS.SAMPLE_ID],
    }),
    createSample: builder.mutation<unknown, ISamplePayload>({
      query: (data) => ({
        url: `/api/sample/`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: transformErrorResponse,
      invalidatesTags: [REDUX.API.TAGS.SAMPLE_ID, REDUX.API.TAGS.SAMPLE_LIST],
    }),
    updateSample: builder.mutation<unknown, ISamplePayload>({
      query: ({ id, data }) => ({
        url: `/api/sample/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformErrorResponse: transformErrorResponse,
      invalidatesTags: [REDUX.API.TAGS.SAMPLE_ID, REDUX.API.TAGS.SAMPLE_LIST],
    }),
    patchSample: builder.mutation<unknown, ISamplePayload>({
      query: ({ id, data }) => ({
        url: `/api/sample/${id}`,
        method: 'PATCH',
        body: data,
      }),
      transformErrorResponse: transformErrorResponse,
      invalidatesTags: [REDUX.API.TAGS.SAMPLE_ID, REDUX.API.TAGS.SAMPLE_LIST],
    }),
    deleteSample: builder.mutation<unknown, ID>({
      query: (id) => ({
        url: `/api/sample/${id}`,
        method: 'DELETE',
      }),
      transformErrorResponse: transformErrorResponse,
      invalidatesTags: [REDUX.API.TAGS.SAMPLE_ID, REDUX.API.TAGS.SAMPLE_LIST],
    }),
  }),
});

export const {
  useCreateSampleMutation,
  useDeleteSampleMutation,
  useGetSampleByIdQuery,
  useGetSampleListQuery,
  useLazyGetSampleByIdQuery,
  useLazyGetSampleListQuery,
  usePatchSampleMutation,
  useUpdateSampleMutation,
} = sampleApi;
