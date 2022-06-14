import {useEffect,useState} from 'react'
import {fetchMoviesDetails} from '../servises/ServisTMDB'
import {useParams} from 'react-router-dom'
export const useFetchMovieDidails = () => {

    const [movies, setMovie] = useState(null);
    const {moviesId} = useParams()


    useEffect(() => {
        fetchMoviesDetails(moviesId).then(setMovie)
    }, [moviesId]);
    return movies;
};