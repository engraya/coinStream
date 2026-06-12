import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = 'https://coinranking1.p.rapidapi.com';

export async function GET(request: NextRequest) {
  const apiKey = process.env.RAPID_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API not configured' }, { status: 503 });
  }

  const { searchParams } = request.nextUrl;
  const params = new URLSearchParams({
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    limit: searchParams.get('limit') ?? '50',
    offset: searchParams.get('offset') ?? '0',
    orderBy: searchParams.get('orderBy') ?? 'volume',
    orderDirection: 'desc',
  });

  try {
    const res = await fetch(`${BASE_URL}/exchanges?${params}`, {
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
    return NextResponse.json({ error: 'Failed to fetch exchanges' }, { status: 500 });
  }
}
