import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import './itemCartContainer.css'
import EmptyItems from '../EmptyItems/EmptyItems'
import '../EmptyItems/EmptyItems.css'

const ItemCartContainer = () => {
  const { cart, totalPriceCart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className='cartContainer'>
      {cart.length === 0 ?
        <EmptyItems message='Carrito vacio'/>
        :
        <>
          <div className='itemListContainer'>
            {cart.map((item) => (
              <ItemCart key={item.id} item={item} />
            ))}
          </div>
          <div className='checkout'>
            <p>Total: {totalPriceCart}</p>
            <button onClick={()=> navigate('/checkout')}>Finalizar compra</button>
          </div>
         </>
      }
    </div>
  )
};

export default ItemCartContainer;
