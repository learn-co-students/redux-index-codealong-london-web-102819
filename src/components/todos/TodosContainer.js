import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todo from './Todo.js';

class TodosContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.todos.map((todo, id) => <Todo key = {id} text = {todo} />)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {todos: state.todos};
}

export default connect(mapStateToProps)(TodosContainer);
