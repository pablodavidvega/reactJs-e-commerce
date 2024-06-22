import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import { FaCartPlus as CartIcon } from 'react-icons/fa';
import './cartWidget.css'

const CartWidget = () => {
    const {totalCuantityCart} = useContext(CartContext)
  return (
    <div className='cartWidget'>
      {<CartIcon className='iconCart'/>}
      <span className='counter'>{totalCuantityCart}</span>
    </div>
  )
}

export default CartWidget
