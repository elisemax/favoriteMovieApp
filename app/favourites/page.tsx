'use client'
import { Box, Grid } from '@mui/material'
import { MovieCard } from '../../components/MovieCard'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { MovieDetailApiResponse } from '../../models/Movies'
import { useRouter } from 'next/navigation'

export default function page() {
  const [favouritesLocal] = useLocalStorage<MovieDetailApiResponse[]>('favourites', [])
  const router = useRouter()
  return (
    <>
      <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
        {favouritesLocal && (
          <Grid container spacing={2}>
            {favouritesLocal.map(movie => (
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
      </Box>
    </>
  )
}
