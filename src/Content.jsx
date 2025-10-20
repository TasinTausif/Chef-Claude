import React from 'react'

export default function(){
    const [ingredients, setIngredients] = React.useState([]);
    function handleSubmit(event){
        event.preventDefault();
        // let ingredient = event.target.ingredient.value;
        const newIngredient = new FormData(event.currentTarget).get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        event.currentTarget.reset();
    }

    const ingredientList = ingredients.map(function(ingredient){
        return <li key={ingredient}>{ingredient}</li>
    })
    
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    aria-label="Ingredient name"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            <h1>Ingredients</h1>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}