import { NextResponse } from 'next/server'
import { MovieDetailApiResponse } from '../../../../models/Movies'

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf('/') + 1)
  const data: MovieDetailApiResponse = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=34516c24`).then(res =>
    res.json()
  )
  return NextResponse.json(data)
}
