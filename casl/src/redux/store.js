import {configureStore} from '@reduxjs/toolkit'
import postReducer from './features/postSlices'
import { pokemonApi } from './features/pokemonApi'

const store = configureStore({
    reducer: {
      posts : postReducer,
      [pokemonApi.reducerPath] : pokemonApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
    
  })
  
export default store
  