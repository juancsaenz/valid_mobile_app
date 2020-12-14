// Dependencies
import React from 'react';
import { shallow } from 'enzyme';
import { FlatList } from 'react-native';
import { render } from 'react-native-testing-library';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// View
import ArtistsList from '../view';

/**
 * @file view.spec.jsx
 * @author Camilo Sáenz
 * @description Test file for artists list view.
 */

const initialValues = Map({ AppState: { loading: true, response: Map({ type: false }) } });
const mockStore = configureMockStore();
const store = mockStore(initialValues);

describe('ArtistsList', () => {
  let component;

  const props = {
    fetchGetArtists: jest.fn(),
    fm: {
      fm: { topartists: { '@attr': { total: 1 }, artist: [] } },
    },
  };

  beforeEach(() => {
    component = shallow(<ArtistsList {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render items to list', () => {
    const { renderItem, keyExtractor } = component
      .find(FlatList)
      .first()
      .props();

    expect(renderItem({ item: { mbid: '1' } })).toBeTruthy();
    expect(keyExtractor({ mbid: '1' })).toBeTruthy();
  });

  it('should obtain footer when load more items', () => {
    const { ListFooterComponent } = component
      .find(FlatList)
      .first()
      .props();

    expect(ListFooterComponent()).toBeFalsy();
  });

  it('should refresh list', () => {
    const { refreshControl } = component
      .find(FlatList)
      .first()
      .props();

    expect(refreshControl.props.onRefresh()).toBeFalsy();
  });

  it('should load more items', () => {
    const result = component
      .find(FlatList)
      .first()
      .props()
      .onEndReached();

    expect(result).toBeFalsy();
  });

  it('shouldnt reset data to list', () => {
    const { handleDataChange } = component.instance();
    const data = { fetchMore: false };
    component.instance().setState(data);
    handleDataChange(data);
  });

  it('shouldnt reset data to list', () => {
    const { handleDataChange } = component.instance();
    const data = { fetchMore: true };
    component.instance().setState(data);
    handleDataChange(data);
  });

  it('should refresh new data to list', () => {
    const { handleRefresh } = component.instance();
    const data = { isFetching: false };
    component.instance().setState(data);
    handleRefresh(data);
  });

  it('should not render refresh control', () => {
    const { renderIndicator } = component.instance();
    const data = { loading: false, refresh: true };
    component.instance().setState(data);
    renderIndicator();
  });

  it('should render refresh control', () => {
    const { renderIndicator } = component.instance();
    const data = { loading: true, refresh: false };
    component.instance().setState(data);
    renderIndicator();
  });

  it('should refresh data to list', () => {
    const { handleLoadMore } = component.instance();
    const data = { isFetching: false, canLoadMore: true };
    component.instance().setState(data);
    handleLoadMore(data);
  });

  it('shouldnt refresh data to list', () => {
    const { handleLoadMore } = component.instance();
    const data = { isFetching: true };
    component.instance().setState(data);
    handleLoadMore(data);
  });

  it('should render component type following with success response', () => {
    const instance = component.instance();
    expect(instance.componentDidUpdate({ fm: { fm: 'test' } })).toBeFalsy();
  });
});

describe('ArtistsList mounted', () => {
  const props = {
    fetchGetArtists: jest.fn(),
  };
  it('should render component with success response', () => {
    const { result } = render(<Provider store={store}><ArtistsList {...props} /></Provider>);
    expect(result).toBeFalsy();
  });
});

describe('ArtistsList mounted', () => {
  it('should render component with success response', () => {
    const { result } = render(<Provider store={store}><ArtistsList /></Provider>);
    expect(result).toBeFalsy();
  });
});
