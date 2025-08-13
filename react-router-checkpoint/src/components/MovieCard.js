import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ 
        width: '18rem', 
        margin: '10px',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        ':hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }
      }}>
        <Card.Img 
          variant="top" 
          src={movie.posterURL} 
          alt={movie.title}
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {movie.description}
          </Card.Text>
          <Badge bg="warning" text="dark">
            Rating: {movie.rating}/10
          </Badge>
        </Card.Body>
      </Card>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterURL: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    trailer: PropTypes.string
  }).isRequired
};

export default MovieCard;