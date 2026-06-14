import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';

let segundos = 0

const root =ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <SecondsCounter counter = {segundos}/>
    </React.StrictMode>,
  )
  segundos++;
}, 1000)


