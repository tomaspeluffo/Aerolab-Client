import { ADD_PRODUCT, SUBSTRACT_PRODUCT } from '../types'

export default function (state, action) {
    const { payload, type } = action

    switch (type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, payload],
                totalCost: state.totalCost + payload.price
            }

        case SUBSTRACT_PRODUCT:
            const array = [...state.products]
            array.splice(payload.index, 1)
            return {
                ...state,
                totalCost: state.totalCost - payload.price,
                products: array
            }
    }
}