import React, { useReducer } from 'react';
import ProductsContext from './ProductsContext';
import ProductReducer from './ProductsReducer'

import axios from 'axios'


const ProductsState = (props) => {
    const initialState = {
        productsList: [],
        page: 1,
        totalPages: null
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        const result = await axios.get(`https://challenge-api.aerolab.co/products`)
        dispatch({
            type: 'GET_PRODUCTS',
            payload: result.data
        })
    }

    const loadMoreProducts = async () => {
        if (state.page < state.totalPages) {
            const result = await axios.get(`https://challenge-api.aerolab.co/products?page=${state.page + 1}`)
            dispatch({
                type: 'GET_MORE_PRODUCTS',
                payload: result.data
            })
        } else {
            return
        }
    }

    return (
        <ProductsContext.Provider value={{
            productsList: state.productsList,
            page: state.page,
            totalPages: state.totalPages,
            getProducts,
            loadMoreProducts
        }}>
            {props.children}
        </ProductsContext.Provider >
    )
}

export default ProductsState