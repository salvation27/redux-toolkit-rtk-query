import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const goodsApi = createApi({
    reducerPath:'goodsApi',
    tegTypes:['Produccts'],
    baseQuery:fetchBaseQuery({
        baseUrl:'https://622f13593ff58f023c150843.mockapi.io/test/'
    }),
    endpoints:(build)=>({
        getGoods:build.query({
            query: (limit = '') => `shop1${limit && `?page=1&limit=${limit}`}`,
            providesTags: (result) =>
            result
              ? [...result.map(({ id }) => ({ type: 'Produccts', id })), {type:'Produccts',id:'LIST'}]
              : [{type:'Produccts',id:'LIST'}],
        }),
        addProduct:build.mutation({
            query: (body)=> ({
                url:'shop1',
                method:'POST',
                body,
            }),
            invalidatesTags:[{
                type:'Produccts',id:'LIST'
            }]
        }),
   
        deleteProduct:build.mutation({
            query:(id) =>({
               url: `shop1/${id}`,
               method:'DELETE',
            }),
            invalidatesTags:[{
                type:'Produccts',id:'LIST'
            }]
        }),
    })
    
})

export const {useGetGoodsQuery,useAddProductMutation,useDeleteProductMutation} = goodsApi