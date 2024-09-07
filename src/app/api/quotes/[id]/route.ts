// returning quote by id and random quote



import { NextRequest, NextResponse } from 'next/server';
import { getQuoteById,getRandomQuote } from "@/controllers/quotes";
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    if (id === "random") {
      // If 'id' is "random", return a random quote
      const randomQuote = await getRandomQuote();
      if (randomQuote) {
        return NextResponse.json(randomQuote, { status: 200 });
      } else {
        return NextResponse.json({ error: 'No quote available' }, { status: 404 });
      }
    }
  
    // Parse the ID as an integer and fetch the quote by ID
    const quoteId = parseInt(id, 10);
  
    if (!isNaN(quoteId)) {
      const quote = await getQuoteById(quoteId);
      if (quote) {
        return NextResponse.json(quote, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
      }
    }
  
    // If the id is not a number and is not "random", return an error
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }