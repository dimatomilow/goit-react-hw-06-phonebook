import {lazy} from 'react'
export const HomeView = lazy(() => import('../vievs/HomeView'/* webpackChunkName: "home-page" */));
export const Movies = lazy(() => import('../vievs/Movies'/* webpackChunkName: "movies" */));
export const MovieDetail = lazy(() => import('../vievs/MovieDetail'/* webpackChunkName: "movie-detail" */));
export const Cast = lazy(() => import('../vievs/Cast'/* webpackChunkName: "cast" */));
export const Revievs = lazy(() => import('../vievs/Revievs'/* webpackChunkName: "revievs" */));
export const NotFound = lazy(() => import('../vievs/NotFound'/* webpackChunkName: "not-found" */));
