import React, { useEffect, useState } from 'react';

export default function Search() {

    const [recipes, setRecipes] = useState([]);

    // Fetch recipes from the backend when the component mounts
    useEffect(() => {
        fetch('/api/recipes')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);  // Log the data to check its structure
                setRecipes(data);  // Set the recipes
            })
            .catch((error) => console.error('Error fetching recipes:', error));
    }, []);

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

            <h2>Recipes</h2>
            <div>
                {recipes.length === 0 ? (
                    <p>No recipes found.</p>
                ) : (
                    <ul>
                        {recipes.map((recipe, index) => (
                            <li key={index}>
                                <h3>{recipe.name}</h3>
                                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <p><strong>Equipment:</strong> {recipe.equip}</p>
                                <p><strong>Steps:</strong> {recipe.steps}</p>
                                <p><strong>Time:</strong> {recipe.time}</p>
                                <p><strong>Type:</strong> {recipe.type}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
}
