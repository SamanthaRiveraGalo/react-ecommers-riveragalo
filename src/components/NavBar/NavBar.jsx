import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <Navbar expand="lg" className="navbar navbar-expand-xl navbar-dark bg-dark">
                <Container fluid>
                    <Link to='/' className='brand'>Nike.</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="conteiner-nav me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to='/category/hombre' className='category'>Hombres</NavLink>
                            <NavLink to='/category/mujer'className='category'>Mujeres</NavLink>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <Link to='/cart' className='cart'>
                        <CartWidget />
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar