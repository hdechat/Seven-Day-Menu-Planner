import React, { Component } from 'react';
import IdeaForm from './IdeaForm.js';
import IdeaContainer from './IdeaContainer.js';
import './App.css';

class App extends Component {
  constructor(props) { //allows access to lifecycle methods
    super(props);

    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [newIdea, ...this.state.ideas]
    this.setState({ ideas })
  }

  removeIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ideas: filteredIdeas});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IdeaBox</h1>
          <IdeaForm addIdea={this.addIdea}/>
        </header>
        <IdeaContainer ideas={this.state.ideas} removeIdea={this.removeIdea}/>
      </div>
    );
  }
}

export default App;
