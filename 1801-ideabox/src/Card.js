import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ title, body, id, removeIdea }) =>  {
  return(
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)}>delete</button>
    </div>
  )
}

Card.PropTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeIdea: PropTypes.func.isRequired
}