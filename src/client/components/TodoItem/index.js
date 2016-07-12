import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { todo } = this.props;

    return (
      <li>
        <div>
          {todo.id}
        </div>
        <div>
          {todo.text}
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
