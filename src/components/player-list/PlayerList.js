import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import './styles.css';

const renderPlayer = player => {
  const { name, nationality, position, age } = player;

  return (
    <tr key={name}>
      <td>{name}</td>
      <td>{position}</td>
      <td>{nationality}</td>
      <td>{age}</td>
    </tr>
  );
};

const PlayerList = props => {
  const { players } = props;

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr className='active'>
          <th>Player</th>
          <th>Position</th>
          <th>Team</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {players.map(renderPlayer)}
      </tbody>
    </table>
  );
};

PlayerList.defaultProps = {};

PlayerList.propTypes = {
  players: arrayOf(shape({
    name: string.isRequired,
    position: string.isRequired,
    nationality: string.isRequired,
    age: number.isRequired
  }))
};

export default PlayerList;
