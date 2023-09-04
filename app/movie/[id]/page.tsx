'use client'
import { Alert, AlertTitle, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { createApiClient } from '../../../lib/client'
import { useParams } from 'next/navigation'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarIcon from '@mui/icons-material/Star'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { MovieDetailApiResponse } from '../../../models/Movies'
import { useDispatch } from 'react-redux'
import { addFavourite, removeFavourite } from '../../store/reducers/favourites'
import { useAppSelector } from '../../store/hooks/useAppSelector'

export default function page() {
  const { movies } = createApiClient()
  const { id } = useParams()
  const { data, isLoading, error } = useQuery(['movies', 'getMovieDetail'], () => movies.getMovieDetail(id))
  const [favouritesLocal, setFavouritesLocal] = useLocalStorage<MovieDetailApiResponse[]>('favourites', [])
  const dispatch = useDispatch()

  if (isLoading) return <Skeleton variant="rectangular" height={400} />
  if (error || !data?.data) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    )
  }

  const { Title, Year, Released, Runtime, Genre, Director, Writer, Poster } = data?.data
  const isFavorite = favouritesLocal.find(favourite => favourite.imdbID === id)

  return (
    <Box sx={{ m: 2, display: 'flex', justifyContent: 'flex-start' }}>
      <img src={Poster} alt={Title} />
      <Box sx={{ m: 2, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography sx={{ ml: 2, mb: 2, pt: 2 }} variant="h5" component="div">
            {Title}
          </Typography>
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={() => {
              if (!isFavorite) {
                setFavouritesLocal([...favouritesLocal, data?.data])
                dispatch(addFavourite(data?.data))
              } else {
                setFavouritesLocal(favouritesLocal.filter(favourite => favourite.imdbID !== id))
                dispatch(removeFavourite(data?.data))
              }
            }}
          >
            {isFavorite ? <StarIcon /> : <StarOutlineIcon />}
          </IconButton>
        </Box>
        <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
          {Year}
        </Typography>
        <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
          {Released}
        </Typography>
        <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
          {Runtime}
        </Typography>
        <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
          {Genre}
        </Typography>
        <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
          {Director}
        </Typography>
        <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
          {Writer}
        </Typography>
      </Box>
    </Box>
  )
}
