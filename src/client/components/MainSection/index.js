import React, { Component, PropTypes } from 'react';
import TodoItem from '../TodoItem';
import CSSModules from 'react-css-modules';
import styles from './styles/index.scss';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Card from 'material-ui/Card';


class MainSection extends Component {
  // default constructor left for illustration purposes
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { todos } = this.props;

    return (
      <Card styleName="main">
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
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
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default CSSModules(MainSection, styles);
