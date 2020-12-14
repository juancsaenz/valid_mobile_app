// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Screens
import ArtistView from '../view';

/**
 * @file index.spec.jsx
 * @author Camilo Sáenz
 * @description Test file for artist screen view.
 */

describe('ProfileView', () => {
  let component;
  const props = {
    loading: false,
  };

  beforeEach(() => {
    component = shallow(<ArtistView {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
