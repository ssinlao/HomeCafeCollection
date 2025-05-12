import React from "react";

export default function RecipeCard({ recipe }) {
    return (
        <li
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                width: '250px',
                display: 'block',
            }}
        >
            <h3>{recipe.name}</h3>
            <img
                src={recipe.image}
                alt={recipe.name}
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                }}
            />
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Equipment:</strong> {recipe.equip}</p>
            <p><strong>Steps:</strong> {recipe.steps}</p>
            <p><strong>Time:</strong> {recipe.time}</p>
        </li>
    );
}
