// returning post by id and random post


import { NextRequest, NextResponse } from 'next/server';
import { getCartById, getRandomCart} from '@/controllers/carts';
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    if (id === "random") {
      // If 'id' is "random", return a random cart
      const randomCart = await getRandomCart();
      if (randomCart) {
        return NextResponse.json(randomCart, { status: 200 });
      } else {
        return NextResponse.json({ error: 'No Cart available' }, { status: 404 });
      }
    }
  
    // Parse the ID as an integer and fetch the cart by ID
    const cartId = parseInt(id, 10);
  
    if (!isNaN(cartId)) {
      const cart = await getCartById(cartId);
      if (cart) {
        return NextResponse.json(cart, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
      }
    }
  
    // If the id is not a number and is not "random", return an error
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }