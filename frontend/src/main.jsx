import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Search from './search.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Search />
    </StrictMode>,
)