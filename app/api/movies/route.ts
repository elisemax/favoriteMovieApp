import { NextResponse } from 'next/server'
import { MoviesSearchApiResponse } from '../../../models/Movies'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '1'
  const search = searchParams.get('s')?.replace(' ', '') || ''
  const data: MoviesSearchApiResponse[] = await fetch(
    `https://www.omdbapi.com/?s=${search}&apikey=34516c24&page=${page}`
  ).then(res => res.json())

  return NextResponse.json(data)
}
