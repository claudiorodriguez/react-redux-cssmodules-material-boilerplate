import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MainSection from '../../src/client/components/MainSection';

describe('<MainSection/>', function () {

  it('should contain hello world', function (done) {
    const todos = [];
    const actions = {};
    const wrapper = shallow(<MainSection todos={todos} actions={actions} />);
    expect(wrapper.find('div').text()).to.eql('hello world');
    done();
  });
});
