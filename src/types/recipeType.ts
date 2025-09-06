export interface Recipe {
    id: number
    name: string
    description: string
    cuisine: string
    ingredients: string[]
    instructions: string[]
    prepTime: string
    cookTime: string
    servings: number
    nutritionalValues: NutritionalValues
    tags: string[]
    rating: number
    difficulty: string
    dishImage: string
}

interface NutritionalValues {
    calories: string
    protein: string
    fat: string
    carbohydrates: string
}
