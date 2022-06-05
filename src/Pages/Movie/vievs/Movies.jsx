import { useState} from 'react'
import { useSearchParams,useLocation } from 'react-router-dom'
import {useFetchMovies} from '../hooks/useFetchMovies'
import { Ul, Li, MovieLink, Img, Title } from '../component/Styles/filmList.styles'
import {Form,BtnSubmit} from '../component/Styles/form.styles'
import BackLink from '../component/BackLink/BackLink'


const Movies = () => {
    const [form, setForm] = useState(' ');

    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    // const filmQuvery = searchParams.get('query ') || ' ';
    const films = useFetchMovies(form);
    const handleSubmit = e => {
        e.preventDefault();
        setForm(e.target.search.value);
        setSearchParams({ query: e.target.search.value });
    }
    console.log(films);
    console.log(form);
    console.log(searchParams);
    return (
        <>
            <BackLink/>
            <Form onSubmit={handleSubmit}>
                <input type=" search" name="search" />
                <BtnSubmit type="submit" value="Search" />
            </Form>

            <Ul>
                {films && films.map(({ title, poster_path, id, backdrop_path }) => <Li key={id}><MovieLink to={`/movies/${id}`} state={{from:location}}>{poster_path ? (<Img src={`https://image.tmdb.org/t/p/w500/${poster_path} `} alt={title} />) : (<Img src={`https://image.tmdb.org/t/p/w500/${backdrop_path} `} alt={title} />)}<Title>{title}</Title></MovieLink></Li>)}
            </Ul>
        </>
    );
};

export default Movies