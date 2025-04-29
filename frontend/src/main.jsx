import React, { StrictMode , Component} from 'react'
import { createRoot } from 'react-dom/client'
import Search from './search.jsx'
import './App.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Search />
    </StrictMode>,
)