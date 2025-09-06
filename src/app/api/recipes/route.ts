import { NextRequest, NextResponse } from 'next/server'
import { getAllRecipes, getRecipesByLimitAndSkip } from '@/controllers/recipes'

export async function GET(request: NextRequest) {
    const url = new URL(request.url)
    const skip = parseInt(url.searchParams.get('skip') || '0', 10)
    const limit = parseInt(url.searchParams.get('limit') || '30', 10)

    // Validate skip and limit
    const isValidNumber = (value: number) => !isNaN(value) && value >= 0

    if (isValidNumber(skip) && isValidNumber(limit)) {
        // Fetch recipes with pagination
        const { data: recipes, metadata } = await getRecipesByLimitAndSkip(
            skip,
            limit
        )
        return NextResponse.json({ recipes, metadata }, { status: 200 })
    } else {
        // Fetch all recipes
        const { data: recipes, metadata } = await getAllRecipes()
        return NextResponse.json({ recipes, metadata }, { status: 200 })
    }
}

// all recipes :- https://json-bro.vercel.app/recipes
// single recipes :- https://json-bro.vercel.app/recipes/:id
// limit recipes :- https://json-bro.vercel.app/recipes?limit=2
// skip recipes :- https://json-bro.vercel.app/recipes?skip=2
// limit and skip recipes :- https://json-bro.vercel.app/recipes?limit=2&skip=2
