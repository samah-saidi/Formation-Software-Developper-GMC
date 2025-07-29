import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React Checkpoint</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="mt-4">
          <h1 className="text-center mb-4">Welcome to My React App</h1>
        </Container>

        {/* Cards */}
        <Container className="d-flex justify-content-around flex-wrap">
          <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is the first card demonstrating React Bootstrap components.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is the second card with different content.
              </Card.Text>
              <Button variant="success">Explore</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                The third card completes our set of React Bootstrap cards.
              </Card.Text>
              <Button variant="warning">Get Started</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;