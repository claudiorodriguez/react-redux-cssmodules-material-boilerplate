import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TodoList from '../../../src/client/components/TodoList';

describe('<TodoList/>', () => {
  it('should contain hello world', () => {
    const todos = [];
    const actions = {};
    const wrapper = shallow(<TodoList todos={todos} actions={actions} />);
    expect(wrapper.find('div').text()).to.eql('hello world');
  });
});
