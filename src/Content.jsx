import React from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientList from "./components/IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    function getRecipe(){
        setRecipeShown(prev => !prev)
    }

    return (
        <main>
            {!recipeShown && <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            }
            {!recipeShown &&ingredients.length > 0 && <IngredientList 
                ingredients={ingredients}
                getRecipe={getRecipe}
            />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}