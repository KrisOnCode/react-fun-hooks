import {Navbar, Container, Nav} from 'react-bootstrap';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/user">User</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </>
  )
}
