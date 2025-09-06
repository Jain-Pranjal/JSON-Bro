'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import CodeSnippet from '@/components/global/CodeSnippet'
import { copyToClipboard } from '@/lib/utils'

// export const metadata: Metadata = {
//     title: 'Recipes API',
//     description:
//         'Documentation for the Recipes API endpoint of JSON Bro, including example requests and responses.',
// }

const DynamicDocs = dynamic(() => import('../page'), { ssr: false })

export default function RecipesPage() {
    const [copiedSnippets, setCopiedSnippets] = useState<{
        [key: string]: boolean
    }>({})
    const [outputVisible, setOutputVisible] = useState<{
        [key: string]: boolean
    }>({})
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleCopy = (id: string, code: string) => {
        copyToClipboard(code)
        setCopiedSnippets((prev) => ({ ...prev, [id]: true }))
        setTimeout(
            () => setCopiedSnippets((prev) => ({ ...prev, [id]: false })),
            2000
        )
    }

    const handleToggleOutput = (id: string) => {
        setOutputVisible((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    const content = (
        <>
            <h3 className="mb-4 text-4xl font-bold">Recipes API</h3>
            <p className="mb-4">
                Use the recipes API endpoint to get dummy recipe data:
            </p>

            <CodeSnippet
                id="getAllRecipes"
                title="Get all Recipes"
                code={`fetch('https://json-bro.vercel.app/recipes')
  .then(res => res.json())
  .then(console.log);`}
                output={`{
  "recipes": [
  {
    "id": 1,
    "name": "Spaghetti Carbonara",
    "description": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    "cuisine": "Italian",
    "ingredients": [
    "200g spaghetti",
    "100g pancetta",
    "2 large eggs",
    "50g pecorino cheese",
    "50g parmesan cheese",
    "Freshly ground black pepper",
    "Salt"
    ],
    "instructions": [
    "Cook the spaghetti in a large pot of boiling salted water until al dente.",
    "In a separate pan, cook the pancetta until crispy.",
    "Beat the eggs in a bowl, then mix in the grated pecorino and parmesan cheese.",
    "Drain the spaghetti and add it to the pan with the pancetta.",
    "Remove the pan from heat and quickly mix in the egg and cheese mixture.",
    "Season with freshly ground black pepper and salt to taste.",
    "Serve immediately."
    ],
    "prepTime": "10 minutes",
    "cookTime": "20 minutes",
    "servings": 2,
    "nutritionalValues": {
    "calories": "600 kcal",
    "protein": "25 g",
    "fat": "30 g",
    "carbohydrates": "60 g"
    },
    "tags": [
    "pasta",
    "Italian",
    "main course"
    ],
    "rating": 4.5,
    "difficulty": "medium",
    "dishImage": "https://via.placeholder.com/400"
  },
  {
    "id": 2,
    "name": "Chicken Curry",
    "description": "A flavorful and spicy chicken curry made with a blend of aromatic spices.",
    "cuisine": "Indian",
    "ingredients": [
    "500g chicken breast, cut into pieces",
    "2 onions, finely chopped",
    "3 cloves garlic, minced",
    "1 tbsp ginger, grated",
    "2 tomatoes, chopped",
    "1 tsp turmeric powder",
    "1 tsp cumin powder",
    "1 tsp coriander powder",
    "1 tsp garam masala",
    "1 tsp chili powder",
    "200ml coconut milk",
    "Fresh coriander leaves",
    "Salt",
    "Oil"
    ],
    "instructions": [
    "Heat oil in a large pan and sauté the onions until golden brown.",
    "Add the garlic and ginger, and cook for another minute.",
    "Add the chicken pieces and cook until they are browned on all sides.",
    "Stir in the tomatoes and cook until they are soft.",
    "Add the turmeric, cumin, coriander, garam masala, and chili powder, and cook for a few minutes.",
    "Pour in the coconut milk and bring to a simmer.",
    "Cook until the chicken is fully cooked and the sauce has thickened.",
    "Season with salt to taste.",
    "Garnish with fresh coriander leaves and serve with rice or naan."
    ],
    "prepTime": "15 minutes",
    "cookTime": "30 minutes",
    "servings": 4,
    "nutritionalValues": {
    "calories": "450 kcal",
    "protein": "35 g",
    "fat": "20 g",
    "carbohydrates": "30 g"
    },
    "tags": [
    "curry",
    "Indian",
    "main course"
    ],
    "rating": 4.7,
    "difficulty": "medium",
    "dishImage": "https://via.placeholder.com/400"
  },
  {...},
  {...},
  {...}
// More recipes...
  ],

  "metadata": {
  "total": 15,
  "skip": 0,
  "limit": 30
  }
  }`}
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
            />

            <CodeSnippet
                id="getRecipeById"
                title="Get Recipe by ID"
                code={`fetch('https://json-bro.vercel.app/recipes/6')
  .then(res => res.json())
  .then(console.log);`}
                output={`{
  "id": 6,
  "name": "Beef Tacos",
  "description": "Delicious beef tacos with a variety of toppings.",
  "cuisine": "Mexican",
  "ingredients": [
  "500g ground beef",
  "1 onion, chopped",
  "2 cloves garlic, minced",
  "1 packet taco seasoning",
  "8 taco shells",
  "1 cup shredded lettuce",
  "1 cup diced tomatoes",
  "1 cup shredded cheese",
  "1/2 cup sour cream",
  "1/2 cup salsa"
  ],
  "instructions": [
  "In a large skillet, cook the ground beef over medium heat until browned.",
  "Add the chopped onion and minced garlic, and cook until the onion is translucent.",
  "Stir in the taco seasoning and cook according to the package instructions.",
  "Warm the taco shells according to the package instructions.",
  "Fill each taco shell with the beef mixture and top with lettuce, tomatoes, cheese, sour cream, and salsa.",
  "Serve immediately."
  ],
  "prepTime": "15 minutes",
  "cookTime": "15 minutes",
  "servings": 4,
  "nutritionalValues": {
  "calories": "300 kcal",
  "protein": "20 g",
  "fat": "15 g",
  "carbohydrates": "25 g"
  },
  "tags": [
  "tacos",
  "Mexican",
  "main course"
  ],
  "rating": 4.7,
  "difficulty": "easy",
  "dishImage": "https://via.placeholder.com/400"
}`}
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
            />

            <CodeSnippet
                id="getRecipesWithLimitAndSkip"
                title="Get Recipes with Limit and Skip"
                code={`fetch('https://json-bro.vercel.app/recipes?limit=2&skip=3')
  .then(res => res.json())
  .then(console.log);`}
                output={`{
  "recipes": [
  {
    "id": 4,
    "name": "Caesar Salad",
    "description": "A fresh and crunchy Caesar salad with homemade dressing.",
    "cuisine": "American",
    "ingredients": [
    "1 head romaine lettuce, chopped",
    "1/2 cup grated parmesan cheese",
    "1 cup croutons",
    "1/2 cup Caesar dressing",
    "1/4 cup lemon juice",
    "2 cloves garlic, minced",
    "1 tsp Dijon mustard",
    "1/2 cup olive oil",
    "Salt and pepper to taste"
    ],
    "instructions": [
    "In a large bowl, combine the chopped romaine lettuce, grated parmesan cheese, and croutons.",
    "In a small bowl, whisk together the Caesar dressing, lemon juice, minced garlic, and Dijon mustard.",
    "Slowly drizzle in the olive oil while whisking continuously until the dressing is well combined.",
    "Pour the dressing over the salad and toss to coat.",
    "Season with salt and pepper to taste.",
    "Serve immediately."
    ],
    "prepTime": "10 minutes",
    "cookTime": "0 minutes",
    "servings": 4,
    "nutritionalValues": {
    "calories": "200 kcal",
    "protein": "5 g",
    "fat": "15 g",
    "carbohydrates": "10 g"
    },
    "tags": [
    "salad",
    "American",
    "appetizer"
    ],
    "rating": 4.3,
    "difficulty": "easy",
    "dishImage": "https://via.placeholder.com/400"
  },
  {
    "id": 5,
    "name": "Pancakes",
    "description": "Fluffy and delicious pancakes perfect for breakfast.",
    "cuisine": "American",
    "ingredients": [
    "1 1/2 cups all-purpose flour",
    "3 1/2 tsp baking powder",
    "1 tsp salt",
    "1 tbsp white sugar",
    "1 1/4 cups milk",
    "1 egg",
    "3 tbsp butter, melted"
    ],
    "instructions": [
    "In a large bowl, sift together the flour, baking powder, salt, and sugar.",
    "Make a well in the center and pour in the milk, egg, and melted butter.",
    "Mix until smooth.",
    "Heat a lightly oiled griddle or frying pan over medium-high heat.",
    "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
    "Brown on both sides and serve hot."
    ],
    "prepTime": "10 minutes",
    "cookTime": "20 minutes",
    "servings": 4,
    "nutritionalValues": {
    "calories": "150 kcal",
    "protein": "4 g",
    "fat": "5 g",
    "carbohydrates": "22 g"
    },
    "tags": [
    "breakfast",
    "American",
    "easy"
    ],
    "rating": 4.6,
    "difficulty": "easy",
    "dishImage": "https://via.placeholder.com/400"
  }
  ],
  "metadata": {
  "total": 15,
  "skip": 3,
  "limit": 2
  }
}`}
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
            />

            <CodeSnippet
                id="getRandomRecipe"
                title="Random Recipe"
                code={`fetch('https://json-bro.vercel.app/recipes/random')
  .then(res => res.json())
  .then(console.log);`}
                output={`{
  "id": 13,
  "name": "Falafel",
  "description": "Crispy and flavorful falafel made from chickpeas and herbs.",
  "cuisine": "Middle Eastern",
  "ingredients": [
  "1 cup dried chickpeas, soaked overnight",
  "1 onion, chopped",
  "2 cloves garlic, minced",
  "1/4 cup fresh parsley, chopped",
  "1/4 cup fresh cilantro, chopped",
  "1 tsp ground cumin",
  "1 tsp ground coriander",
  "1/2 tsp baking powder",
  "Salt and pepper to taste",
  "Oil for frying"
  ],
  "instructions": [
  "Drain and rinse the soaked chickpeas.",
  "In a food processor, combine the chickpeas, onion, garlic, parsley, cilantro, cumin, coriander, baking powder, salt, and pepper.",
  "Pulse until the mixture is finely ground but not pureed.",
  "Transfer the mixture to a bowl and refrigerate for 30 minutes.",
  "Heat oil in a deep fryer or large skillet over medium-high heat.",
  "Form the chickpea mixture into small balls or patties.",
  "Fry the falafel in batches until golden brown and crispy.",
  "Drain on paper towels and serve with pita bread, hummus, and salad."
  ],
  "prepTime": "20 minutes",
  "cookTime": "10 minutes",
  "servings": 4,
  "nutritionalValues": {
  "calories": "300 kcal",
  "protein": "10 g",
  "fat": "15 g",
  "carbohydrates": "35 g"
  },
  "tags": [
  "vegetarian",
  "Middle Eastern",
  "appetizer"
  ],
  "rating": 4.6,
  "difficulty": "medium",
  "dishImage": "https://via.placeholder.com/400"
}`}
                copiedSnippets={copiedSnippets}
                outputVisible={outputVisible}
                onCopy={handleCopy}
                onToggleOutput={handleToggleOutput}
            />
        </>
    )

    return isClient ? <DynamicDocs content={content} /> : null
}
