import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import CartContext from '../../context/cart/CartContext'
import { useContext } from 'react'
import './navBar.css'
import '../OrderContainer/order.css'
import CustomSelect from '../CustomSelect/CustomSelect'
import { collection,getDocs,getFirestore } from 'firebase/firestore'

const Navbar = () => {
  const {totalCuantityCart} = useContext(CartContext)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    (async () => {
      const db = getFirestore();
      const docsRef = collection(db, "categories")
      const querySnapshot = await getDocs(docsRef)
      setCategories(querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() })))
    })();
  }, []);

  const handleCategorySelected = (id)=> {
    if(id === '8aKL02krJUcV7jhFz52M') {
      navigate('/')
    }else {
      navigate('/category/' + id)
    }
  }

  return (
    <div className='navBar-wrap'>
      <nav className='navBar-container'>
        <div className='links'>
          <Link className='link link-title' to="/">E-commerce</Link>
          <Link className='link' to="/orders">Ordenes</Link>
          <Link className='link' to="/cart"> <CartWidget/></Link>
        </div>
      </nav>
      {(location.pathname === '/' || location.pathname.includes('/category')) &&
       <CustomSelect
        handleCategorySelected={handleCategorySelected}
        categories={categories}
      />
      }
    </div>
  )
}

export default Navbar
