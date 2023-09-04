'use client'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MovieSimple } from '../models/Movies'

type Props = {
  movie: MovieSimple
  onClick: (id: string) => void
}

export const MovieCard = ({ movie, onClick }: Props) => (
  <Box sx={{ m: 2 }}>
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea sx={{ minHeight: 300 }} onClick={() => onClick(movie.imdbID)}>
        <CardMedia component="img" height="140" image={movie.Poster} alt={movie.Title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Box>
)
