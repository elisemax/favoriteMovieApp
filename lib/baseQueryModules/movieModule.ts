import axios, { AxiosResponse } from 'axios'
import { MovieDetailApiResponse, MoviesSearchApiResponse } from '../../models/Movies'

export type MovieModule = ReturnType<typeof createModule>

export function createModule() {
  return {
    search: (search?: string, page?: string): Promise<AxiosResponse<MoviesSearchApiResponse>> => {
      return axios.get(`/api/movies/${search ? `?s=${search}` : ''} ${page ? `&page=${page}` : ''}`)
    },
    getMovieDetail: (id: string): Promise<AxiosResponse<MovieDetailApiResponse>> => {
      return axios.get(`/api/movie/${id}`)
    }
  }
}
