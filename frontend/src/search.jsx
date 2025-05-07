import React, { useEffect, useState } from 'react';

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
                ? prevSelected.filter((t) => t !== type) // remove if already selected
                : [...prevSelected, type] // add if not selected
        );
    };

    const handleEquipChange = (equip) => {
        setSelectedEquip((prevSelected) =>
            prevSelected.includes(equip)
                ? prevSelected.filter((e) => e !== equip)  // remove
                : [...prevSelected, equip]                 // add
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
                        {filteredRecipes.length === 0 ? (  // Replace recipes with filteredRecipes
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
                                    <li
                                        key={index}
                                        style={{
                                            border: '1px solid #ccc',
                                            borderRadius: '8px',
                                            padding: '16px',
                                            backgroundColor: '#f9f9f9',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                            width: '300px',
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
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
