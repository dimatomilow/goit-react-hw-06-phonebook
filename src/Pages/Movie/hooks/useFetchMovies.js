import { useState, useEffect } from 'react'
import { fetchSearchMoive } from '../servises/ServisTMDB'
export const useFetchMovies = (form) => {
    const [films, setFilms] = useState(null);
    useEffect(() => {
        try {
            if (form===null) { return };
       fetchSearchMoive(form).then(setFilms)
        } catch (error) {
            console.log(error)
        }

    }, [form])
    return films;
};