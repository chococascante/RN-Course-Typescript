import React from 'react';
import renderer from 'react-test-renderer';
import ButtonsContainer from './ButtonsContainer';

describe('(Component) ButtonsContainer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
