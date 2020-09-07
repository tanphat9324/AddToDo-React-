/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import Header from './layout/Header'
import Todos from './Todos';
import AddTodo from './AddTodo';

export default class TodoApp extends Component {
    state = {
        todos: [
        {
        id: 1,
        title: "Setup development environment",
        completed: true
        },
        {
        id: 2,
        title: "Develop website and add content",
        completed: false
        },
        {
        id: 3,
        title: "Deploy to live server",
        completed: false
        }
        ]
        };
        handleCheckboxChange = id => {
            this.setState({
                todos: this.state.todos.map(todo=>{
                    if(todo.id === id)
                    todo.completed = !todo.completed;
                    return todo;
                })
            })
        }
        handleDeleteTodo = id => {
            this.setState({
                todos: this.state.todos.filter(item=> {
                    if(item.id !== id) return true;
                    return false;
                })
            })
        }
        handleAddNew = title => {
            const newTodo = {
                id: [...this.state.todos].length+1,
                title: title,
                completed: false
                };
                this.setState({
                todos: [...this.state.todos, newTodo]
                });
        }
    render() {
        return (
            <div className="container">
               <Header/>
               <AddTodo addNewTodo={this.handleAddNew}/>
               <Todos todos={this.state.todos} handleChange={this.handleCheckboxChange}
               deleteTodo={this.handleDeleteTodo}/>
            </div>
        )
    }
}
