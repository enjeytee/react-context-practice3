import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {UserContextProvider} from './components/userContext'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <App />
    </UserContextProvider>
)