import { createSlice } from '@reduxjs/toolkit'
import { MovieDetailApiResponse } from '../../../models/Movies'

export const initialState = [] as MovieDetailApiResponse[]

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite(state, { payload }) {
      state.push(payload)
    },
    removeFavourite(state, { payload }) {
      return state.filter(movie => movie.imdbID !== payload.imdbID)
    }
  }
})

export const { addFavourite, removeFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer
