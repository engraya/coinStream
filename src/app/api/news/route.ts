import { NextResponse } from 'next/server';

interface GNewsArticle {
  title: string;
  url: string;
  publishedAt: string;
  source: { name: string; url: string };
}

export async function GET() {
  const token = process.env.GNEWS_API_KEY;

  if (!token) {
    return NextResponse.json({ available: false, results: [] });
  }

  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=cryptocurrency&lang=en&max=9&sortby=publishedAt&apikey=${token}`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) {
      return NextResponse.json({ available: false, results: [] });
    }

    const data = await res.json();

    const results = (data.articles as GNewsArticle[]).map((a) => ({
      id: a.url,
      title: a.title,
      slug: '',
      url: a.url,
      domain: a.source.url ?? '',
      published_at: a.publishedAt,
      currencies: [],
      source: { title: a.source.name, domain: a.source.url ?? '' },
    }));

    return NextResponse.json({ available: true, results, count: results.length }, {
      headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=600' },
    });
  } catch {
    return NextResponse.json({ available: false, results: [] });
  }
}
