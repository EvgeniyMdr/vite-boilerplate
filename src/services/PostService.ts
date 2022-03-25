import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {ApiPath} from '../constants';
import {Post} from '../models/Post';

const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: ApiPath}),
  endpoints: (build) => ({
    fetchAllUsers: build.query<Post[], number>({
      query: (limit: number) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export default postApi;
