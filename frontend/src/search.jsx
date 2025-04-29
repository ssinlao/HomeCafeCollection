import React from 'react';

export default function Search() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Home Cafe Collection</h1>
            <p></p>
            <form>
                <input type="text" id="search" name="search" placeholder="Search" /><br />
                <input type="submit" value="Submit" /><br />
            </form>

            <h3>Equipment</h3>
            <div className="equipment">
                <label htmlFor="espMachine">
                    <input type="checkbox" id="espMachine" name="espMachine" />
                    Espresso Machine
                </label>
                <label htmlFor="electWhisk">
                    <input type="checkbox" id="electWhisk" name="electWhisk" />
                    Electric Whisk
                </label>
            </div>

            <h3>Types</h3>
            <div className="bevType">
                <label htmlFor="coffee">
                    <input type="checkbox" id="coffee" name="coffee" />
                    Coffee
                </label>
                <label htmlFor="matcha">
                    <input type="checkbox" id="matcha" name="matcha" />
                    Matcha
                </label>
                <label htmlFor="nonCaf">
                    <input type="checkbox" id="nonCaf" name="nonCaf" />
                    Non Caffeinated
                </label>
                <label htmlFor="smoothie">
                    <input type="checkbox" id="smoothie" name="smoothie" />
                    Smoothie
                </label>
                <label htmlFor="tea">
                    <input type="checkbox" id="tea" name="tea" />
                    Tea
                </label>
            </div>
        </div>
    );
}