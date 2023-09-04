'use client'

import { Alert, AlertTitle, Box, Grid, Skeleton, Typography } from '@mui/material'
import SearchInput from '../components/SearchInput'
import { createApiClient } from '../lib/client'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { MoviesSearchApiResponse } from '../models/Movies'
import { MovieCard } from '../components/MovieCard'
import { useRouter } from 'next/navigation'

export default function page() {
  const { movies } = createApiClient()
  const router = useRouter()
  const [search, setSearch] = useState<string>('')
  const [moviesList, setMoviesList] = useState<MoviesSearchApiResponse | null>(null)

  const {
    mutate: getMoviesList,
    isLoading,
    error
  } = useMutation(['movies', 'search'], () => movies.search(search, '1'), {
    onSuccess: movies => {
      setMoviesList(movies.data)
    }
  })

  if (isLoading) return <Skeleton variant="rectangular" height={400} />
  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    )
  }

  return (
    <>
      <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
        <SearchInput
          placeholder="Search for a movie"
          onSearchClick={() => {
            if (search.length > 3) {
              getMoviesList()
            }
          }}
          onChange={e => {
            setSearch(e.target.value)
          }}
          value={search}
        />
      </Box>
      {moviesList && (
        <Grid container spacing={2}>
          {moviesList.Search.map(movie => (
            <Grid key={movie.imdbID} item xs={6} md={4}>
              <MovieCard
                movie={movie}
                onClick={imdbID => {
                  router.push(`/movie/${imdbID}`)
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}
