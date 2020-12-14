// Dependencies
import React from 'react';
import 'jsdom-global/register';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// Screens
import MainView, { mapStateToProps, mapDispatchToProps } from '../index';

const mockStore = configureMockStore();
const store = mockStore({});

/**
 * @file index.spec.jsx
 * @author Camilo Sáenz
 * @description Test file for artist redux definition screen view.
 */

describe('Artist redux definition', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <MainView />
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
    expect(mapStateToProps({ getIn: () => ({ toJS: () => true }) })).toBeTruthy();
    expect(mapDispatchToProps(null)).toBeTruthy();
  });
});
