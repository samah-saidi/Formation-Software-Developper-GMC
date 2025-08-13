import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <Container fluid className="movie-list-container">
      <Row className="movie-row flex-nowrap overflow-auto">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      posterURL: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      trailer: PropTypes.string
    })
  ).isRequired
};

export default MovieList;