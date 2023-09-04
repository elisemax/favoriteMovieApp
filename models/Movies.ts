export type MoviesSearchApiResponse = {
  Respone: string
  Search: MovieSimple[]
  totalResults: string
}

export type MovieSimple = Pick<MovieDetailApiResponse, 'Title' | 'Year' | 'imdbID' | 'Type' | 'Poster'>

export type MovieDetailApiResponse = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export type Rating = {
  Source: string
  Value: string
}
