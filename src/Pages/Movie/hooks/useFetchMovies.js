import { useState, useEffect } from 'react'
import { fetchSearchMoive } from '../servises/ServisTMDB'
export const useFetchMovies = (form) => {
    const [films, setFilms] = useState(null);
    const[error,setError]=useState(null);
    useEffect(() => {
        try {
            if (form===null) { return };
       fetchSearchMoive(form).then(setFilms)
        } catch (error) {
            setError(error.message)
        }

    }, [form])
    return {films,error};
};