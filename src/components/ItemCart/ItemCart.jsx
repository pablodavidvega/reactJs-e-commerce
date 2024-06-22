import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import './itemCart.css'

const ItemCart = ({item}) => {
  const {deleteItemCart} = useContext(CartContext)
  return (
    <div className='itemCart'>
      <h3>{item.title}</h3>
      <span>{item.cuantity}</span>
      <img src={item.image}/>
      <button onClick={()=>deleteItemCart(item.id)}>Borrar</button>
    </div>
  )
}

export default ItemCart
