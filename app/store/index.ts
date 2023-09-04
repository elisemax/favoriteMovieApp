'use client'
import { configureStore } from '@reduxjs/toolkit'
import themeSlice, { Theme } from './reducers/theme'
import favouritesSlice from './reducers/favourites'
import { MovieDetailApiResponse } from '../../models/Movies'

const store = configureStore({
  reducer: {
    theme: themeSlice,
    favourites: favouritesSlice
  }
})

export type AppStore = {
  theme: Theme
  favourites: MovieDetailApiResponse[]
}

export default store
