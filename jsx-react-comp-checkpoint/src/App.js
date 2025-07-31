import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import products from './product';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Samah"; // Change this to your name or leave empty

function App() {
  return (
    
    <Container className="my-5">
      <div className="text-center mt-4">
        <h2>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h2>
        {firstName && (
          <img 
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" 
            alt="User" 
            style={{ width: '100px' }}
            className="mt-2"
          />
        )}
      </div>

      <h1 className="text-center mb-4">Our Products</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow">
              <Card.Body>
                <Image product={product} />
                <Name product={product} />
                <Price product={product} />
                <Description product={product} />
                <div className="text-center mt-3">
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


    </Container>
  );
}

export default App;