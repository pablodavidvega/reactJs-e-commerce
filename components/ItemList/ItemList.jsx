import React from 'react'
import { useNavigate } from 'react-router-dom'
import './item-list.css'

const ItemList = ({product}) => {

  const navigate = useNavigate()

  return (
    <div className='item-list-container'>
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>
      <img className='card-img' src={product.image}/>
      <span>{product.price}</span>
      <button className='card-button' onClick={()=>navigate("/detail/" + product.id)}>Detalle</button>
    </div>
  )
}

export default ItemList
