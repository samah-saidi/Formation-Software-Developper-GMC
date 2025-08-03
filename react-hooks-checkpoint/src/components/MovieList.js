import React from 'react';
import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </Row>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      posterURL: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
};

export default MovieList;