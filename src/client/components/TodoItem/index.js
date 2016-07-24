import React, { PropTypes } from 'react';

function TodoItem({ todo }) {
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

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
