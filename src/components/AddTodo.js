import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title: ""
        };
        handleChange = e => {
            this.setState({
                title : e.target.value
            })
        }
        onSubmit = (e) => {
            e.preventDefault();
            this.props.addNewTodo(this.state.title);
        }
    render() {
        return (
            <form className="form-container" onSubmit={this.onSubmit} >
            <input type="text" placeholder="Add Todo..." className="input-text"
            value={this.state.title} onChange={this.handleChange}
            />
            <input type="submit" value="Submit" className="input-submit" />
            </form>
        )
    }
}
