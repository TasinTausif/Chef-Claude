import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientsList"
import { getRecipeFromApi } from "../data/ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    // useRef hook is used to create a reference to a DOM element or a React component
    const recipeSectionRef = React.useRef(null)//Here, initializing a ref to null and we'll get current: null in the browser console
    React.useEffect(() => {
        if(recipe !== "" && recipeSectionRef.current !== null){
            // In the code bellow, we are using the scrollIntoView method to scroll to the referenced element and by adding additional options as behavior: smooth, the transition will happen smoothly when a new recipe is set.
            recipeSectionRef.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])    

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
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientList
                refHook={recipeSectionRef}
                ingredients={ingredients}
                getRecipe={getRecipe}
            />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}