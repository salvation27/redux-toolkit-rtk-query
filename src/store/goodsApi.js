import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const goodsApi = createApi({
    reducerPath:'goodsApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://622f13593ff58f023c150843.mockapi.io/test/'
    }),
    endpoints:(build)=>({
        getGoods:build.query({
            query:()=>'shop1'
        })
    })
    
})

export const {useGetGoodsQuery} = goodsApi