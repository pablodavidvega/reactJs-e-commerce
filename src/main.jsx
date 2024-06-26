import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { initializeApp } from "firebase/app"


//Aqui van las credenciales de Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBQNLNl9Al41r5sgfbMc-BObr6JijHUWRs",
  authDomain: "reactfirebasecoderhouse-c055b.firebaseapp.com",
  projectId: "reactfirebasecoderhouse-c055b",
  storageBucket: "reactfirebasecoderhouse-c055b.appspot.com",
  messagingSenderId: "314207194997",
  appId: "1:314207194997:web:891281d9c7a9d1be240d3c"
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


