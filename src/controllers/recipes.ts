// Recipes controller

import fs from 'fs'
import path from 'path'
import { Recipe } from '@/types/recipeType'
import { paginate } from '@/helpers/paginate'
import { PaginatedResponse } from '@/types/paginatedResponse'

// all the recipes
export async function getAllRecipes(): Promise<PaginatedResponse<Recipe>> {
    try {
        const data = await fs.promises.readFile(
            path.join(process.cwd(), 'src/database/recipes.json'),
            'utf8'
        )
        const recipes: Recipe[] = JSON.parse(data)

        // Use the paginate function without skip and limit for default values
        return paginate(recipes)
    } catch (error) {
        console.error('Error reading recipes.json:', error)
        return {
            data: [],
            metadata: {
                total: 0,
                skip: 0,
                limit: 0,
            },
        }
    }
}

//   get by id
export async function getRecipeById(id: number): Promise<Recipe | null> {
    try {
        const data = await fs.promises.readFile(
            path.join(process.cwd(), 'src/database/recipes.json'),
            'utf8'
        )
        const recipes: Recipe[] = JSON.parse(data)

        // Find the recipe by id
        const recipe = recipes.find((recipe) => recipe.id === id)

        return recipe || null // Return null if not found
    } catch (error) {
        console.error('Error reading recipes.json:', error)
        return null
    }
}

// get by limit and skip
export async function getRecipesByLimitAndSkip(
    skip: number = 0,
    limit: number = 30
): Promise<PaginatedResponse<Recipe>> {
    try {
        const data = await fs.promises.readFile(
            path.join(process.cwd(), 'src/database/recipes.json'),
            'utf8'
        )
        const recipes: Recipe[] = JSON.parse(data)

        return paginate(recipes, skip, limit)
    } catch (error) {
        console.error('Error reading recipes.json:', error)
        return {
            data: [],
            metadata: {
                total: 0,
                skip: 0,
                limit: 0,
            },
        }
    }
}

// Random recipe function
export async function getRandomRecipe(): Promise<Recipe | null> {
    try {
        const data = await fs.promises.readFile(
            path.join(process.cwd(), 'src/database/recipes.json'),
            'utf8'
        )
        const recipes: Recipe[] = JSON.parse(data)

        // If no recipes exist, return null
        if (recipes.length === 0) return null

        // Generate a random index and return the recipe at that index
        const randomIndex = Math.floor(Math.random() * recipes.length)
        return recipes[randomIndex]
    } catch (error) {
        console.error('Error reading recipes.json:', error)
        return null
    }
}
