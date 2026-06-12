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
    timePeriod: searchParams.get('timePeriod') ?? '24h',
    orderBy: searchParams.get('orderBy') ?? 'marketCap',
    orderDirection: 'desc',
    limit: searchParams.get('limit') ?? '50',
    offset: searchParams.get('offset') ?? '0',
  });

  const search = searchParams.get('search');
  if (search) params.set('search', search);

  try {
    const res = await fetch(`${BASE_URL}/coins?${params}`, {
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream API error' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=120' },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch coins' }, { status: 500 });
  }
}
