import React, { useEffect, useState } from 'react';
import RecipeCard from "./recipeCard.jsx";

export default function Search() {

    const [recipes, setRecipes] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedEquip, setSelectedEquip] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch recipes from the backend when the component mounts
    useEffect(() => {
        let url = '/api/recipes';
        const params = new URLSearchParams();

        if (selectedTypes.length === 1) {
            params.append('type', selectedTypes[0]);
        }

        if (selectedEquip.length === 1) {
            params.append('equip', selectedEquip[0]);
        }

        if(searchTerm.trim()){
            params.append('search', searchTerm.trim());
        }

        fetch(`${url}?${params.toString()}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRecipes(data);
            })
            .catch((error) => console.error('Error fetching recipes:', error));
    }, [selectedTypes, selectedEquip, searchTerm]);

    const handleTypeChange = (type) => {
        setSelectedTypes((prevSelected) =>
            prevSelected.includes(type)
                ? prevSelected.filter((t) => t !== type) // remove filter
                : [...prevSelected, type] // add filter
        );
    };

    const handleEquipChange = (equip) => {
        setSelectedEquip((prevSelected) =>
            prevSelected.includes(equip)
                ? prevSelected.filter((e) => e !== equip)  // remove filter
                : [...prevSelected, equip] // add filter
        );
    };

    const filteredRecipes = recipes.filter((recipe) =>
        (selectedTypes.length === 0 || selectedTypes.includes(recipe.type.toLowerCase())) &&
        (selectedEquip.length === 0 || selectedEquip.some(equip => recipe.equip.toLowerCase().includes(equip.toLowerCase())))
    );

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1 className="custom-header">Home Cafe Collection</h1>
            <div className={"boxes"}>
                <div className={"filters"}
                     style={{
                         backgroundColor: '#ffffff',
                         padding: '2rem',
                         borderRadius: '10px'

                     }}
                >
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" id="search" name="search" placeholder="Search"
                               value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/><br />
                    </form>

                    <h3>Equipment</h3>
                    <div className={"equipment"}>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleEquipChange('Espresso Machine')}
                                checked={selectedEquip.includes('Espresso Machine')}
                            />
                            Espresso Machine
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleEquipChange('Electric Whisk')}
                                checked={selectedEquip.includes('Electric Whisk')}
                            />
                            Electric Whisk
                        </label>
                    </div>

                    <h3>Types</h3>
                    <div className={"bevType"}>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleTypeChange('coffee')}
                                checked={selectedTypes.includes('coffee')}
                            />
                            Coffee
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleTypeChange('matcha')}
                                checked={selectedTypes.includes('matcha')}
                            />
                            Matcha
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleTypeChange('non caffinated')}
                                checked={selectedTypes.includes('non caffinated')}
                            />
                            Non Caffinated
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleTypeChange('smoothie')}
                                checked={selectedTypes.includes('smoothie')}
                            />
                            Smoothie
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleTypeChange('tea')}
                                checked={selectedTypes.includes('tea')}
                            />
                            Tea
                        </label>
                    </div>
                </div>

                <div>
                    <div>
                        {filteredRecipes.length === 0 ? (
                            <p>No recipes found.</p>
                        ) : (
                            <ul
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '20px',
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                }}
                            >
                                {filteredRecipes.map((recipe, index) => (
                                    <RecipeCard key={index} recipe={recipe} />
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
