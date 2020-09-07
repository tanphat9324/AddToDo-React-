import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { completed, id, title } = this.props.todo;
        return (
            <li className="todo-item">
                <input type="checkbox" checked={completed}
                    onChange={() => this.props.handleChange(id)}
                />
                <span className={completed ? "completed" : null}>
                    {title}
                </span>
                <button onClick={()=>this.props.deleteTodo(id)} className="btn-style"> X </button>
            </li>
        )
    }
}
