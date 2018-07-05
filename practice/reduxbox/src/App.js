import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'
import { connect } from 'react-redux'
import { addTodo } from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="App-intro">
          <TodoForm this.props.handleSubmit/>
          <TodoList todoList={this.props.todoList}/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (todo) => (dispatch(addTodo(todo)))
})

connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
