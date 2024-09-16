// returning recipies by id and random recipie



import { NextRequest, NextResponse } from 'next/server';
import { getRandomRecipie,getRecipieById } from '@/controllers/recipies';
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    if (id === "random") {
      // If 'id' is "random", return a random recipie
      const randomRecipie = await getRandomRecipie();
      if (randomRecipie) {
        return NextResponse.json(randomRecipie, { status: 200 });
      } else {
        return NextResponse.json({ error: 'No recipie available' }, { status: 404 });
      }
    }
  
    // Parse the ID as an integer and fetch the recipie by ID
    const recipieId = parseInt(id, 10);
  
    if (!isNaN(recipieId)) {
      const recipie = await getRecipieById(recipieId);
      if (recipie) {
        return NextResponse.json(recipie, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Recipie not found' }, { status: 404 });
      }
    }
  
    // If the id is not a number and is not "random", return an error
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }