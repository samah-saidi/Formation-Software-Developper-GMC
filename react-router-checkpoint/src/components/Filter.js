import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Filter = ({ onFilterChange }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
    onFilterChange(e.target.value, ratingFilter);
  };

  const handleRatingChange = (e) => {
    const rating = Number(e.target.value);
    setRatingFilter(rating);
    onFilterChange(titleFilter, rating);
  };

  return (
    <Form className="mb-4">
      <Row>
        <Col md={6}>
          <Form.Group controlId="titleFilter">
            <Form.Label>Filter by Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search movies..."
              value={titleFilter}
              onChange={handleTitleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="ratingFilter">
            <Form.Label>Filter by Minimum Rating</Form.Label>
            <Form.Control
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={ratingFilter}
              onChange={handleRatingChange}
            />
            <div>Minimum Rating: {ratingFilter}</div>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;