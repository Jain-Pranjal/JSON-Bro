// returning recipes by id and random recipe

import { NextRequest, NextResponse } from 'next/server'
import { getRandomRecipe, getRecipeById } from '@/controllers/recipes'

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = params.id

    if (id === 'random') {
        // If 'id' is "random", return a random recipe
        const randomRecipe = await getRandomRecipe()
        if (randomRecipe) {
            return NextResponse.json(randomRecipe, { status: 200 })
        } else {
            return NextResponse.json(
                { error: 'No recipe available' },
                { status: 404 }
            )
        }
    }

    // Parse the ID as an integer and fetch the recipe by ID
    const recipeId = parseInt(id, 10)

    if (!isNaN(recipeId)) {
        const recipe = await getRecipeById(recipeId)
        if (recipe) {
            return NextResponse.json(recipe, { status: 200 })
        } else {
            return NextResponse.json(
                { error: 'Recipe not found' },
                { status: 404 }
            )
        }
    }

    // If the id is not a number and is not "random", return an error
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
}
