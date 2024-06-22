import React, { useContext, useState } from 'react'
import Count from '../Count/Count'
import CartContext from '../../context/cart/CartContext'
import { useNavigate } from 'react-router-dom'
import './itemDetail.css'

const ItemDetail = ({product}) => {

  const [count ,setCount] = useState(1)
  const {cart,addItemCart} = useContext(CartContext)
  const navigate = useNavigate()

  const addItem = () => {
      addItemCart({...product,cuantity:count})
      navigate("/cart")
  }

  return (
    <div className='detail'>
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>
      <img src={product.image}/>
      <p>{product.description}</p>
      <span className='detail-price'>{product.price}</span>
      <Count count={count} handleCount={setCount} stock={product.stock}/>
      <button className='detail-button-buy' onClick={addItem }>Comprar </button>
    </div>
  )
}

export default ItemDetail
