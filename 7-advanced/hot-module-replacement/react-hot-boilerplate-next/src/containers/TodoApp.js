import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions'

class App extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <div>
        {/* change Header to Header1 cause build error */}
        <Header addTodo={actions.addTodo} />
        {/* change {todos} to {todos1} cause runtime error */}
        <MainSection todos={todos} actions={actions} />
        {/* add node */}
        {/* <div style={{ marginTop: 30}}>I am new node...</div> */}
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
