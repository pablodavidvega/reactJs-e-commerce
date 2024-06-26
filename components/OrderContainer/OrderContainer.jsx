import React ,{useState,useEffect} from 'react'
import { collection,getDocs,getFirestore } from 'firebase/firestore'
import { BeatLoader } from 'react-spinners'
import './order.css'

const OrderContainer = () => {

  const [orders,setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    (async ()=>{
      setLoading(true)
      const db = getFirestore()
      const docsRef = collection(db,"orders")
      const querySnapshop = await getDocs(docsRef)
      setOrders(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
      setLoading(false)
    })()
  },[])

  if(loading) return <BeatLoader className='spinner-beatloader' />

  return (
    <div className='order-container'>
        {orders.map(order => <div key={order.id}><p>{order.id}</p></div>)}
    </div>
  )
}

export default OrderContainer
