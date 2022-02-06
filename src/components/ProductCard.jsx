import React, { useState, useContext, useEffect } from 'react';
import SubstractIcon from '../assets/substractLogo.png'
import CartContext from '../context/Cart/CartContext';
import './productCard.css'


const ProductCard = ({ product }) => {
    const { addToCart, substractFromCart, products } = useContext(CartContext)
    const [selectProduct, setSelectProduct] = useState(false)
    const [quantitySelected, setQuantitySelected] = useState(0)

    const substractOne = (product) => {
        if (quantitySelected === 0) return setSelectProduct(false)
        setQuantitySelected(state => quantitySelected - 1)
        substractFromCart(product)
    }

    const addOne = (product) => {
        setQuantitySelected(state => quantitySelected + 1)
        addToCart(product)
    }

    const getCartProducts = () => {
        const filterProducts = products.filter(prod => prod.id === product.id)
        setQuantitySelected(filterProducts.length)
    }

    useEffect(() => { getCartProducts() }, [])

    return (
        <div className=''>
            <div className='card my-2 p-1 mx-1 d-flex flex-col' >
                <div className='card-image-container d-flex'>
                    <img className='mx-auto' src={product.photo} alt="" />
                </div>
                <div className='card-description-container d-flex'>
                    <p className='text-center font-size-small my-1'>{product.name}</p>
                </div>
                <div className='card-price-container mt-auto'>
                    <p className='text-center text-blue my-1'>${product.price}</p>
                </div>
                <div className='add-to-cart-container d-flex mt-auto mb-2'>
                    {selectProduct === false && quantitySelected === 0 ? (<button onClick={setSelectProduct} className='add-to-cart mx-auto py-2'>Agregar al carrito</button>) : (<div className='d-flex flex-row add-products-container px-3 mt-auto align-items-center'>
                        <img src={SubstractIcon} alt="substract icon" className='sum-icons' onClick={() => substractOne(product)} />
                        <p className='my-0'>{quantitySelected}</p>
                        <img src={SubstractIcon} alt="add icon" className='sum-icons' onClick={() => addOne(product)} />
                    </div>)}
                </div>
            </div>
        </div>
    )
}
export default ProductCard


