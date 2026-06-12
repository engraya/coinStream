import { NextResponse } from 'next/server';

const BASE_URL = 'https://coinranking1.p.rapidapi.com';

export async function GET() {
  const apiKey = process.env.RAPID_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API not configured' }, { status: 503 });
  }

  try {
    const res = await fetch(`${BASE_URL}/stats?referenceCurrencyUuid=yhjMzLPhuIDl`, {
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      },
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream API error' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=120, stale-while-revalidate=240' },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
