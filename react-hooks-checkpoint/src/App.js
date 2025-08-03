import React, { useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  // Initial movies data
  const initialMovies = [
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg',
      rating: 8.8
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_UF1000,1000_QL80_.jpg',
      rating: 9.3
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.',
      posterURL: 'https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg',
      rating: 9.0
    }
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [showModal, setShowModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
  });

  const handleFilterChange = (titleFilter, ratingFilter) => {
    const filtered = movies.filter(movie => {
      const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
      const matchesRating = movie.rating >= ratingFilter;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.posterURL) {
      const updatedMovies = [...movies, newMovie];
      setMovies(updatedMovies);
      setFilteredMovies(updatedMovies);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: 0
      });
      setShowModal(false);
    }
  };

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">🎥 My Movie Collection</h1>
      
      <div className="d-flex justify-content-between mb-4">
        <Filter onFilterChange={handleFilterChange} />
        <Button variant="primary" onClick={() => setShowModal(true)}>
          ➕ Add New Movie
        </Button>
      </div>
      
      <MovieList movies={filteredMovies} />
      
      {/* Add Movie Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newMovie.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="url"
                name="posterURL"
                value={newMovie.posterURL}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Rating (0-10)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="10"
                step="0.1"
                name="rating"
                value={newMovie.rating}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default App;