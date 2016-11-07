import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

function Head() {
  return (
    <h1>
      {/* 测试无状态组件的热加载 */}
      {/* <div>app</div> */}
      <div>todos</div>
    </h1>
  );
}

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <Head />
        <TodoTextInput
          newTodo
          // 测试正常组件对运行时异常的处理
          // onSave={this1.handleSave.bind(this)}
          onSave={this.handleSave.bind(this)}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
