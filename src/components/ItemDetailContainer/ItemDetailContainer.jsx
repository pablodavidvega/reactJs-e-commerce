import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import { BeatLoader } from 'react-spinners'

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [product,setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        (async ()=>{
          setLoading(true)
            const db = getFirestore()
            const docRef = doc(db,"products",id)
            const docSnap = await getDoc(docRef)
            setProduct({id:docSnap.id,...docSnap.data()})
          setLoading(false)
        })()
    },[])

  if (loading) return <BeatLoader/>

  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer
