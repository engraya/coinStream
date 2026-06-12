import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = 'https://coinranking1.p.rapidapi.com';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const apiKey = process.env.RAPID_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API not configured' }, { status: 503 });
  }

  const { searchParams } = request.nextUrl;
  const timePeriod = searchParams.get('timePeriod') ?? '24h';

  const queryParams = new URLSearchParams({
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod,
  });

  try {
    const res = await fetch(`${BASE_URL}/coin/${params.id}?${queryParams}`, {
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      },
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream API error' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=30, stale-while-revalidate=60' },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch coin details' }, { status: 500 });
  }
}
