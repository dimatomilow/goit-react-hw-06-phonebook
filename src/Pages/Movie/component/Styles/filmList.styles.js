import styled from 'styled-components/'
import {Link} from 'react-router-dom'
export const Ul = styled.ul`
        display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 16px;
    margin: 0px auto;
    padding: 0px;
    list-style: none;
    margin-top:25px;

`;
export const Li = styled.li`
margin:10px

`;
export const MovieLink = styled(Link)`
text-decoration:none;
font-weight: 500;
  color: #2a363b;
  text-align: center;
`;
export const Img = styled.img`
    display: block;
    max-width: 100%;
    height: auto;

`;
export const Title = styled.p`
font-weight: 700;
  color: #2a363b;
  font-size: 16px;
`;