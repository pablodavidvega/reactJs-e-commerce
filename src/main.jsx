import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { initializeApp } from "firebase/app"


//Aqui van las credenciales de Firebase

const firebaseConfig = {

}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


