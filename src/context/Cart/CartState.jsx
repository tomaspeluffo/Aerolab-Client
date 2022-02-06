import React, { useReducer } from 'react';
import CartReducer from './CartReducer'
import CartContext from './CartContext';


const CartState = (props) => {
    const initialState = {
        products: JSON.parse(sessionStorage.getItem('cart')) || [],
        totalCost: JSON.parse(sessionStorage.getItem('cost')) || 0
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (product) => {
        product.price = parseInt(product.price * 100) / 100
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        })
    }

    const substractFromCart = (product) => {
        const indexOfProduct = state.products.findIndex(prod => prod.id === product.id)
        const productInfo = {
            index: indexOfProduct,
            price: parseInt(product.price * 100) / 100
        }

        dispatch({
            type: 'SUBSTRACT_PRODUCT',
            payload: productInfo
        })
    }

    return (
        <CartContext.Provider value={{
            products: state.products,
            totalCost: state.totalCost,
            addToCart,
            substractFromCart
        }}>
            {props.children}
        </CartContext.Provider >
    )
}

export default CartState