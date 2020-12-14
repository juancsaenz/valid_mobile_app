// Dependencies
import 'jsdom-global/register';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

// Screens
import ArtistsList, { mapStateToProps, mapDispatchToProps } from '../index';

const mockStore = configureMockStore();
const store = mockStore({});
/**
 * @file index.spec.jsx
 * @author Camilo Sáez
 * @description Test file for artist list redux definition screen view.
 */
describe('Artist greet list redux definition', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <ArtistsList />
      </Provider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should check props definition', () => {
    expect(mapStateToProps({ fm: () => ({ toJS: () => true }) })).toBeTruthy();
    expect(mapDispatchToProps(null)).toBeTruthy();
  });
});
