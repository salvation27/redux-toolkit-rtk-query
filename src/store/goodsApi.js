import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const goodsApi = createApi({
    reducerPath:'goodsApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://622f13593ff58f023c150843.mockapi.io/test/'
    }),
    endpoints:(build)=>({
        getGoods:build.query({
            query: (limit = '') => `shop1${limit && `?page=1&limit=${limit}`}`,
        })
    })
    
})

export const {useGetGoodsQuery} = goodsApi