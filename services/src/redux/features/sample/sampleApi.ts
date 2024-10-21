
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { REDUX } from "../../constant/slice";
import { IApiParams } from "@nx-next-js-micro/components";
import { GetBaseFetchQuery, toQueryString, TransformErrorResponse } from "../../helper/query";


const TAGS = [REDUX.API.TAGS.SAMPLE_LIST, REDUX.API.TAGS.SAMPLE_ID];

type ISamplePayload = {
  id: string;
  data: Record<string, any>;
};

export const sampleApi = createApi({
  reducerPath: REDUX.API.SAMPLE,
  baseQuery: GetBaseFetchQuery,
  tagTypes: TAGS,
  endpoints: (builder) => ({
    getSampleList: builder.query<unknown, IApiParams>({
      query: (params) => {
        const qs = toQueryString(params);
        return `/api/sample/list?${qs}`;
      },
      transformErrorResponse: TransformErrorResponse,
      providesTags: [REDUX.API.TAGS.SAMPLE_LIST],
    }),
    getSampleById: builder.query<unknown, string>({
      query: (id) => `/api/sample/${id}`,
      transformErrorResponse: TransformErrorResponse,
      providesTags: [REDUX.API.TAGS.SAMPLE_ID],
    }),
    createSample: builder.mutation<unknown, ISamplePayload>({
      query: (data) => ({
        url: `/api/sample/`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: TransformErrorResponse,
      invalidatesTags: [REDUX.API.TAGS.SAMPLE_ID, REDUX.API.TAGS.SAMPLE_LIST],
    }),
    updateSample: builder.mutation<unknown, ISamplePayload>({
      query: ({ id, data }) => ({
        url: `/api/sample/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformErrorResponse: TransformErrorResponse,
      invalidatesTags: [REDUX.API.TAGS.SAMPLE_ID, REDUX.API.TAGS.SAMPLE_LIST],
    }),
    patchSample: builder.mutation<unknown, ISamplePayload>({
      query: ({ id, data }) => ({
        url: `/api/sample/${id}`,
        method: 'PATCH',
        body: data,
      }),
      transformErrorResponse: TransformErrorResponse,
      invalidatesTags: [REDUX.API.TAGS.SAMPLE_ID, REDUX.API.TAGS.SAMPLE_LIST],
    }),
    deleteSample: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/api/sample/${id}`,
        method: 'DELETE',
      }),
      transformErrorResponse: TransformErrorResponse,
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
