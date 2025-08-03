import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img 
        variant="top" 
        src={movie.posterURL} 
        alt={movie.title}
        style={{ height: '400px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Badge bg="warning" text="dark">
          Rating: {movie.rating}/10
        </Badge>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterURL: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default MovieCard;