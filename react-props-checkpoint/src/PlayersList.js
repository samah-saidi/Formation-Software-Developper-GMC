import React from 'react';
import Player from './Player';
import players from './players';
import { Row } from 'react-bootstrap';

const PlayersList = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      <Row>
        {players.map(player => (
          <Player key={player.id} {...player} />
        ))}
      </Row>
    </div>
  );
};

export default PlayersList;