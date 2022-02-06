import { GET_PRODUCTS, GET_MORE_PRODUCTS } from '../types'

export default function (state, action) {
    const { payload, type } = action

    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productsList: payload.products,
                totalPages: payload.page_count
            }

        case GET_MORE_PRODUCTS:
            return {
                ...state,
                productsList: [...state.productsList, ...payload.products],
                page: payload.page
            }
    }
}