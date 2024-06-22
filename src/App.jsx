import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer'
import Navbar from './components/Navbar/Navbar'
import CartProvider from './context/cart/CartProvider'
import OrderContainer from './components/OrderContainer/OrderContainer'
import Checkout from './components/Checkout/Checkout'
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer vision={'Productos de alta calidad importados para ventas al por mayor'}/> }/>
              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<ItemCartContainer/>}/>
              <Route path='/orders' element={<OrderContainer/>}/>
              <Route path='/checkout' element={<CheckoutContainer/>}/>
              <Route path='/category/:id' element={<ItemListContainer/>}/>
            </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
