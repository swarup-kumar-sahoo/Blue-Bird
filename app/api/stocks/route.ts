import { NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const symbolsParam = searchParams.get("symbols");

    if (!symbolsParam) {
      return NextResponse.json({ error: "Symbols query parameter is required" }, { status: 400 });
    }

    const symbols = symbolsParam.split(",");

    // Fetch all stocks in parallel
    const results = await Promise.all(
      symbols.map(async (symbol) => {
        const quote = await yahooFinance.quote(symbol);
        return {
          symbol: quote.symbol,
          longName: quote.longName,
          regularMarketPrice: quote.regularMarketPrice,
          regularMarketChangePercent: quote.regularMarketChangePercent,
        };
      })
    );

    return NextResponse.json(results);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Error fetching stock data" }, { status: 500 });
  }
}
