import React, { useContext } from 'react';
import ProductsContext from '../context/Products/ProductsContext';
import ProductCard from './ProductCard';
import './productStore.css'

const ProductsStore = ({ productsList }) => {


    const { loadMoreProducts, page, totalPages } = useContext(ProductsContext);

    const loadMore = () => {
        loadMoreProducts()
    }

    return (
        <>

            <div className='d-flex flex-wrap flex-row justify-content-between'>
                {productsList.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

                <div className='load-more-container py-3 d-flex'>
                    {page === totalPages ? <button disabled={true} className='load-more-button mx-auto py-2' onClick={loadMore}>
                        No hay mas nada para mostrar
                    </button> : <button className='load-more-button mx-auto py-2' onClick={loadMore}>
                        Cargar más productos
                    </button>}

                </div>
            </div>
        </>
    )
}

export default ProductsStore