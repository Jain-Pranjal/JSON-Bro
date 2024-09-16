// returning product by id and random product



import { NextRequest, NextResponse } from 'next/server';
import { getProductById,getRandomProduct } from '@/controllers/products';
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    if (id === "random") {
      // If 'id' is "random", return a random quote
      const randomProduct = await getRandomProduct();
      if (randomProduct) {
        return NextResponse.json(randomProduct, { status: 200 });
      } else {
        return NextResponse.json({ error: 'No quote available' }, { status: 404 });
      }
    }
  
    // Parse the ID as an integer and fetch the product by ID
    const productId = parseInt(id, 10);
  
    if (!isNaN(productId)) {
      const product = await getProductById(productId);
      if (product) {
        return NextResponse.json(product, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
    }
  
    // If the id is not a number and is not "random", return an error
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }