import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Swastik from "./Swastik"
import Welcome from "./Welcome"

const testElement = React.createElement('a',{href: 'https://www.google.com'}, 'testElement->Google');

ReactDOM.createRoot(document.getElementById('root')).render(

    // ----------------------------------------

    // <>
    // <Swastik />
    // <App />
    // </>

    // ----------------------------------------
    
    // testElement

    // ----------------------------------------

    <Welcome />

)
