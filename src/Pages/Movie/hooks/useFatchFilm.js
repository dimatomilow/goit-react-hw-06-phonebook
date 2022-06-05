import { useEffect, useState } from 'react'
import { popularMovies } from '../servises/ServisTMDB'
export const useFatchFilm = () => {
    const[movies,setMovies]=useState(null)

    useEffect(() => {
        try {
            popularMovies().then(setMovies);
        } catch (error) {
            console.log(error)
        }

    }, [])
    return movies;
}