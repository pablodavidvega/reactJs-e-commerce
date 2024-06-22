import React, { useContext, useState } from 'react'
import Checkout from '../Checkout/Checkout'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/cart/CartContext'
import Swal from 'sweetalert2'

const CheckoutContainer = () => {

  const navigate = useNavigate()
  const {cart, totalPriceCart, clearCart} = useContext(CartContext)

  const completeOrder = async (buyer) => {
    const order = {
      buyer,
      items: cart,
      total: totalPriceCart
    }

    const db = getFirestore()
    const docRef = collection(db, 'orders')
    const result = await addDoc(docRef, order)
    clearCart()
    Swal.fire("Codigo de compra:" + result.id);
    navigate('/orders')
  }

  return (
    <div>
      <Checkout completeOrder={completeOrder}/>
    </div>
  )
}

export default CheckoutContainer
