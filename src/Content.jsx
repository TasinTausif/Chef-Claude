import React from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientList from "./components/IngredientsList"
import { getRecipeFromApi } from "./data/ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromApi(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            {!recipe && <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            }
            {!recipe && ingredients.length > 0 && <IngredientList
                ingredients={ingredients}
                getRecipe={getRecipe}
            />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}