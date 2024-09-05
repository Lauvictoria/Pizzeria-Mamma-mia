import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const CustomNavbar = () => {
    const total = 0;
    const token = false;

    return (
        <Navbar expand="lg" className="navbar bg-body-tertiary w-100">
              <Container fluid> 
                <Navbar.Brand href="#">Pizzeria Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Login</Nav.Link>
                        <Nav.Link href="#action3">Register</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success">Total: ${total.toLocaleString()}</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}

export default CustomNavbar;