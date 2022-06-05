import {useFetchCact} from '../hooks/useFetchCact'
 const Cast = () => {
    const casts=useFetchCact()

    return (
        <>
            <ul>
                {casts && casts.map(({profile_path,id,name}) => <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width = '100'/>
                    <p>{name}</p></li>)}
</ul>
    </>

    );
}

export default Cast