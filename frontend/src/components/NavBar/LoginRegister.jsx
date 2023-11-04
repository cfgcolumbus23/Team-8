import Nav from 'react-bootstrap/Nav';

const LoginRegister = (props) => {
    if(!props.auth) {
        return (
            <>
                <Nav.Link href="Login">Login</Nav.Link>
                <Nav.Link href="Register">Register</Nav.Link>
            </>
        );
    } else {
        return (
            <>
                <Nav.Link href="Profile">Profile</Nav.Link>
                <Nav.Link href="Dashboard">Sign Out</Nav.Link>
            </>
        );
    }
}

export default LoginRegister;