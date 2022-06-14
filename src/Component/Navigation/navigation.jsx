import {Link,Nav} from './navigation.styled'
import {useLocation} from 'react-router-dom'
export const Navigation = () => {
    const location =useLocation()
    return (<Nav>
        <Link to="/"state={{from:location}}>Home</Link>
        <Link to="/phonebook"state={{from:location}}>Phonebook</Link>
        <Link to="/movies"state={{from:location}}>Movie</Link>
        <Link to="/images" state={{ from: location }}>Images</Link>
        <Link to="/redux" state={{ from: location }}>Redux</Link>
        </Nav>
    );
}

