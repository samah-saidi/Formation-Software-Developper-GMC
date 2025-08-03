import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AddMovie = ({ show, handleClose, handleAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  const handleSubmit = () => {
    if (newMovie.title && newMovie.posterURL) {
      handleAddMovie(newMovie);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: 0
      });
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>🎬 Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleInputChange}
              required
              placeholder="Enter movie title"
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
              placeholder="Enter movie description"
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Poster URL *</Form.Label>
            <Form.Control
              type="url"
              name="posterURL"
              value={newMovie.posterURL}
              onChange={handleInputChange}
              required
              placeholder="Enter image URL"
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
              placeholder="Enter rating"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AddMovie.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAddMovie: PropTypes.func.isRequired
};

export default AddMovie;