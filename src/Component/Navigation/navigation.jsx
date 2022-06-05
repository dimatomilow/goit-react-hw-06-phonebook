import {Link,Nav} from './navigation.styled'

export  const Navigation = () => {
    return (<Nav>
        <Link to="/">Home</Link>
        <Link to="/phonebook">Phonebook</Link>
        <Link to="/movies">Movie</Link>
        <Link to="/images">Images</Link>
        </Nav>
    );
}

