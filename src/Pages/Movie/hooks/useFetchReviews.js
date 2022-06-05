import {useParams} from 'react-router'
import {fetchMoviesReviews} from '../servises/ServisTMDB'
import {useState,useEffect} from 'react'


export const useFetchReviews = () => {
     const  [reviews, setReviews ] = useState(null);
    const { moviesId } = useParams();
console.log(reviews)
useEffect(() => {
        fetchMoviesReviews(moviesId).then(setReviews)
}, [moviesId]);
    return reviews;
}