import Nav from 'react-bootstrap/Nav';

const LoginRegister = (props) => {
    if(!props.auth) {
        return (
            <>
                <Nav.Link href="#Login">Login</Nav.Link>
                <Nav.Link href="#Register">Register</Nav.Link>
            </>
        );
    } else {
        return <></>;
    }
}

export default LoginRegister;