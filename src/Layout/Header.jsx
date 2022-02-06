import React, { useEffect, useState, useContext } from 'react';
import CartContext from '../context/Cart/CartContext';
import Logo from '../assets/logoDownload.png'
import Cart from '../assets/shoppingCart.png'
import './header.css'

const Header = () => {
    const { products, totalCost } = useContext(CartContext);
    const [navShadow, setNabShadow] = useState(true)
    const [userOnline, setUserOnline] = useState(true)

    const controlScroll = () => {
        if (window.scrollY > 10) {
            setNabShadow(false)
        } else {
            setNabShadow(true)
        }
    }

    const checkUserConnection = () => {
        setUserOnline(window.navigator.onLine)
    }


    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(products));
        sessionStorage.setItem('cost', JSON.stringify(totalCost));
    }, [products])


    useEffect(() => {
        window.addEventListener('scroll', controlScroll)
        return () => {
            window.removeEventListener('scroll', controlScroll)
        }
    }, [])

    useEffect(() => {
        checkUserConnection()
    })

    return (
        <>
            <div className={`navbar ${navShadow && 'nav-shadow'} `}>

                <nav className='d-flex '>
                    <div className='d-flex py-3 ml-3 align-items-center'>
                        <img src={Logo} alt="logo" className='logo' />
                        <span className='ml-2 text-blue'><strong className='font-weight-medium'>Ez</strong>shop</span>
                    </div>
                    {!userOnline && <div className='alret-container'>
                        <span className='ml-4'>&#9888;</span>
                        <p className='my-0 ml-1'>Sin Conexion</p>
                    </div>}


                    <div className='d-flex ml-auto mr-3 alig align-items-center'>
                        <span className='mr-2 text-blue font-size-small font-weight-medium'>$ {parseInt(totalCost * 100) / 100}</span>
                        <div>
                            <img src={Cart} alt="cart" />
                            {products.length > 0 ? <span className='badge'>{products.length}</span> : null}

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header