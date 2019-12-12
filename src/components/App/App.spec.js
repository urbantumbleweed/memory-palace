import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './index';
import { styleSheet } from './App.styles';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />: ', () => {
  const name = 'Hilary';
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App name={name} />);
  });
  it('has top-level container class', () => {
    expect(wrapper.hasClass(/^container/)).to.be.true;
  });
  it('has children', () => {
    expect(wrapper.props().children).to.exist;
  });
  it('uses a styles object', () => {
    expect(styleSheet).to.have.property('classes')
      .to.include.keys(['container']);
  });
});