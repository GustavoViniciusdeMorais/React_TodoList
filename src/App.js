import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from "./components/Todos";
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Study",
        completed: false
      },
      {
        id: 2,
        title: "Work",
        completed: false
      },
      {
        id: 3,
        title: "Dinner with wife!",
        completed: false
      }
    ]
  };


  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  };

  // delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  // add
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
