import React, { PropTypes } from 'react';
import TodoItem from '../TodoItem';
import CSSModules from 'react-css-modules';
import styles from './styles/index.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';

function TodoList({ todos }) {
  return (
    <Card styleName="main">
      <ul>
        {todos.map(todo =>
          <TodoItem key={todo.id} todo={todo} />
        )}
      </ul>
      <RaisedButton label="Default" />
      <div>hello world</div>
    </Card>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default CSSModules(TodoList, styles);
