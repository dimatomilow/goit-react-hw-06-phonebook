import {lazy} from 'react'
export const HomeView = lazy(() => import('../../Pages/Movie/vievs/HomeView'/* webpackChunkName: "home-page" */));
export const Movies = lazy(() => import('../../Pages/Movie/vievs/Movies'/* webpackChunkName: "movies" */));
export const MovieDetail = lazy(() => import('../../Pages/Movie/vievs/MovieDetail'/* webpackChunkName: "movie-detail" */));
export const Cast = lazy(() => import('../../Pages/Movie/vievs/Cast'/* webpackChunkName: "cast" */));
export const Revievs = lazy(() => import('../../Pages/Movie/vievs/Revievs'/* webpackChunkName: "revievs" */));
export const NotFound = lazy(() => import('../../Pages/NotFound/NotFound'/* webpackChunkName: "not-found" */));
export const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'/* webpackChunkName: "home-page" */));
export const AppPhoneBook = lazy(() => import('../../Pages/Phomebook/AppPhoneBook'/* webpackChunkName: "phonebook" */));
export const Images = lazy(() => import('../../Pages/Images/Images'/* webpackChunkName: "images" */));
export const ReduxToolkit = lazy(() => import('../../Pages/Redux-Toolkit/ReduxToolkit'/* webpackChunkName: "redux-toolkit" */));