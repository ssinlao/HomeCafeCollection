import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Search from './search.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Search />
    </StrictMode>,
)

/*export default function App() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Home Cafe Collection</h1>
            <p></p>
            <form>
                <input type="text" id="search" name="search" placeholder="Search"/><br />
                <input type="submit" value="Submit" /><br />
            </form>

            <h3>Equipment</h3>
            <div class={"equipment"}>
                <label htmlFor="espMachine"><input type="checkbox"/>Espresso Machine</label>
                <label htmlFor="electWhisk"><input type="checkbox"/>Electric Whisk</label>
            </div>

            <h3>Types</h3>
            <div className={"bevType"}>
                <label htmlFor="Coffee"><input type="checkbox"/>Coffee</label>
                <label htmlFor="matcha"><input type="checkbox"/>Matcha</label>
                <label htmlFor="nonCaf"><input type="checkbox"/>Non Caffinated</label>
                <label htmlFor="smoothie"><input type="checkbox"/>Smoothie</label>
                <label htmlFor="tea"><input type="checkbox"/>Tea</label>
            </div>

        </div>
    );
}*/
