import {Ul,Li,MovieLink,Img,Title} from '../component/Styles/filmList.styles'
import { useFatchFilm } from '../hooks/useFatchFilm'
import {useLocation} from 'react-router-dom'


  const HomeViev =() => {
      const movies = useFatchFilm()
      const location =useLocation()
    return <Ul>
        {movies && movies.map(
            ({ id, poster_path, title,backdrop_path }
            ) => <Li key={id}>
                    <MovieLink to={`/movies/${id}`}state={{from:location}} >
                        {poster_path ? (<Img src={`https://image.tmdb.org/t/p/w500/${poster_path} `} alt={title} />):(<Img src={`https://image.tmdb.org/t/p/w500/${backdrop_path} `} alt={title} />)}
                        <Title>{title}</Title>
                    </MovieLink>
                </Li>)}
</Ul>
}
export default HomeViev