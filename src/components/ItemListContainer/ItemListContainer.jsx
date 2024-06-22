import React, { useEffect, useState } from 'react'
import { collection,getDocs,getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { BeatLoader } from 'react-spinners'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({vision}) => {

  const [products,setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
    const fetchProducts = async () => {
      setLoading(true)
      const db = getFirestore();

      if(!id) {
        const docsRef = collection(db, "products");
        const querySnapshot = await getDocs(docsRef);
        setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setLoading(false); // Establecer loading en false una vez que se hayan cargado los datos
      } else {
        const docsRef = collection(db, "products");
        const q = query(docsRef, where('categoryId','==',id))
        const querySnapshot = await getDocs(q);
        setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      }
      setLoading(false)
    }

    fetchProducts();
  }, [id]);

  if (loading) return <BeatLoader/>

  return (
    <div className='content-all-products'>
      <h2 className='vision'>{vision}</h2>
      <div className='list-container'>
        {products.map(product => <ItemList key={product.id} product={product}/>)}
      </div>
    </div>
  )
}

export default ItemListContainer
