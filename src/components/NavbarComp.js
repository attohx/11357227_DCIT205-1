import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="/">
              <img
                src="./../comlogo.png"
                width="auto"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/GradeReport">Grades</Nav.Link>
            <Nav.Link href="/GradeMiss">Grade Error</Nav.Link>

            <Nav.Link href="/InsContact">Instructors</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/Faqs"><Button variant="outline-info">Support</Button></Nav.Link>
            <Nav.Link href="/Login"><Button variant="outline-primary">Login</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;