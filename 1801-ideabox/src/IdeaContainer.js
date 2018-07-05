import React from 'react';
import { Card } from './Card.js';
import PropTypes from 'prop-types';

const IdeaContainer = ({ ideas, removeIdea }) => {

  const ideaCards = ideas.map((idea, index) => 
    <Card 
      key={index}
      {...idea} //gives all the propertys of idea. easier editing: if this.state in app changes, all changes follow.
      removeIdea={removeIdea}
    />);

  return(
    <div>
      {ideaCards}
    </div>
  )
}

IdeaContainer.propTypes = {
  ideas: PropTypes.array.isRequired,
  removeIdea: PropTypes.func.isRequired
}

export default IdeaContainer;