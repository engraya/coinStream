import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.CRYPTOPANIC_API_TOKEN;

  if (!token) {
    return NextResponse.json({ available: false, results: [] });
  }

  try {
    const res = await fetch(
      `https://cryptopanic.com/api/v1/posts/?auth_token=${token}&kind=news&public=true`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) {
      return NextResponse.json({ available: false, results: [] });
    }

    const data = await res.json();
    return NextResponse.json({ available: true, ...data }, {
      headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=600' },
    });
  } catch {
    return NextResponse.json({ available: false, results: [] });
  }
}
