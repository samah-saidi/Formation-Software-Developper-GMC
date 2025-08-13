import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} style={{ maxWidth: '300px', marginBottom: '20px' }} />
      <p><strong>Rating:</strong> {movie.rating}/10</p>
      <p>{movie.description}</p>
      
      <div className="trailer-container" style={{ margin: '20px 0' }}>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title={`${movie.title} Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default MovieDetails;