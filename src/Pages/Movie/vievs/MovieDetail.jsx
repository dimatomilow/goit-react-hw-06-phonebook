import{useFetchMovieDidails} from '../hooks/useFetchMovieDidails'
import {Outlet } from 'react-router-dom'
import { Section, Div,Information,Img } from '../component/Styles/MovieDetailStyles'
import { LinkViev } from '../component/Styles/link.styles'
import BackLink from '../component/BackLink/BackLink'

 const MovieDetail = () => {
     const movies = useFetchMovieDidails()

    return (
        <>
            <BackLink/>
            {movies && (<Section>
                {movies.poster_path ? (<Img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path} `} alt={movies.title} />):(<Img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path} `} alt={movies.title} />)}
                 {/* <Img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title}  /> */}
                <Div>
                <h1>{movies.title}</h1>
                <h2>overview</h2>
                <p>{ movies.overview}</p>
                <h2>Genrec</h2>
                {movies.genres.map(genr => <p key={genr.id}>{ genr.name}</p>)}

                </Div>
            </Section>)}
            <hr />
            <Information>
                 <h2>Additional information </h2>
            <LinkViev to="cast">Cast</LinkViev>
            <LinkViev to="revievs">Revievs</LinkViev>
         <Outlet />
       </Information>
        </>
    );
}

export default MovieDetail