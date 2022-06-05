import {useEffect,useState} from 'react'
import {fetchMoviesDetails} from '../servises/ServisTMDB'
import {useParams,useLocation } from 'react-router-dom'
export const useFetchMovieDidails = () => {
  const location = useLocation()
     console.log(location)
    const [movies, setMovie] = useState(null);
    const {moviesId} = useParams()


    useEffect(() => {
        fetchMoviesDetails(moviesId).then(setMovie)
    }, [moviesId]);
    return movies;
};