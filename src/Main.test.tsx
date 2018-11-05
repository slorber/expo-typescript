import 'react-native';
import * as React from 'react';
import Main from 'Main';
import * as renderer from 'react-test-renderer';

describe('Main snapshot', () => {
  it('renders',  () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
