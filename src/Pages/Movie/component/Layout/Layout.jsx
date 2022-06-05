import {Outlet } from "react-router-dom";
import Container from "../Container/Container";
import AppBar from "../AppBar/AppBar";

 const Layout = () => {
    return (
        <Container>
            <AppBar />
            <Outlet/>
        </Container>
    );
};
export default Layout