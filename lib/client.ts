import { MovieModule, createModule } from './baseQueryModules/movieModule'

export type ApiClient = {
  movies: MovieModule
}

export function createApiClient(): ApiClient {
  return {
    movies: createModule()
  }
}
