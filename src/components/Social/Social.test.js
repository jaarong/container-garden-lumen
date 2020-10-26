// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Social from './Social';

describe('Social', () => {
  const props = {
    contacts: {
      email: '#',
      twitter: '#',
      vkontakte: '#',
      github: '#',
      rss: '#',
      telegram: '#'
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Social {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
