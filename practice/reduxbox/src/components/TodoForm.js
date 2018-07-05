import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = { todoUserInput: '' }
  }

  render() {
    return (
      <form>
        <input
          placeholder="Enter Todo Item"
          value={this.state.todoUserInput}
          onChange={event => this.setState({ todoUserInput: event.target.value})} />
        <button>Submit Todo</button>
      </form>
    )
  }
}