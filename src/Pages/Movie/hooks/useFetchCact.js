
import {useParams} from 'react-router'
import {fetchMoviesCast} from '../servises/ServisTMDB'
import {useState,useEffect} from 'react'


export const useFetchCact = () => {
const  [casts, setCast ] = useState(null);
    const { moviesId } = useParams();
console.log(casts)
    useEffect(() => {
    try {
        fetchMoviesCast(moviesId).then(setCast)
    } catch (error) {
        console.log(error)
    }

}, [moviesId]);
    return casts;
};