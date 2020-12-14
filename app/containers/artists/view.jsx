// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, FlatList, RefreshControl } from 'react-native';

// Components
import ArtistItem from '../../components/artistItem';

// Styles
import colors from '../../utils/theme/colors';
import styles from './styles';

/**
 * @component ArtistsList
 * @author Camilo Sáenz
 * @description Artists list view.
 */

export class ArtistsList extends React.PureComponent {
  /**
   * Initilize ArtistsList component
   * @param { object } props - Component properties
   */
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      fetchMore: true,
      refresh: false,
      isFetching: true,
      canLoadMore: false,
      loading: false,
      page: 1,
    };
  }

  /**
   * Dispatch when component is mounted
   */
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { fm } = this.props;
    if (prevProps.fm.fm !== fm.fm) {
      this.handleDataChange();
    }
  }

  /**
   * Receive response when data refresh
   */
  handleDataChange = () => {
    const { fm: { fm } } = this.props;
    const { fetchMore, data } = this.state;
    let newData = [];

    if (fetchMore) {
      newData = data.concat(fm.topartists.artist);
    } else {
      newData = fm.topartists.artist;
    }

    this.setState({
      fetchMore: false,
      refresh: false,
      isFetching: false,
      data: newData,
      canLoadMore: newData.length < fm.topartists['@attr'].total,
    });
  }

  /**
   * Call service to load data
   */
  loadData = () => {
    const { fetchGetArtists } = this.props;
    const { page } = this.state;

    this.setState({ isFetching: true }, () => {
      if (fetchGetArtists) {
        fetchGetArtists(page, this.handleDataChange);
      }
    });
  }

  /**
   * Emit dispatch to update state and generate reload
   */
  handleRefresh = () => {
    const { isFetching } = this.state;
    if (!isFetching) {
      this.setState({ refresh: true, page: 1 }, () => this.loadData());
    }
  };

  /**
   * Emit dispatch to update state and generate reload
   */
  handleLoadMore = () => {
    const { isFetching, canLoadMore, page } = this.state;

    if (!isFetching && canLoadMore) {
      const newPage = page + 1;
      this.setState({ fetchMore: true, page: newPage }, () => this.loadData());
    }
  };

  /**
   * Render indicator when is loading
   * @param { object } data - data values
   * @return { Component }
   */
  renderIndicator = () => {
    const { loading, refresh } = this.state;

    if (!loading || refresh) {
      return null;
    }

    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  };

  render() {
    const { refresh, data } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item) => item.mbid}
          renderItem={({ item }) => (<ArtistItem item={item} />)}
          showsVerticalScrollIndicator={false}
          refreshControl={(
            <RefreshControl
              refreshing={refresh}
              onRefresh={this.handleRefresh}
              tintColor={colors.primary}
            />
          )}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.4}
          ListFooterComponent={this.renderIndicator}
        />
      </View>
    );
  }
}

/**
 * Component definition of proptypes.
 */
ArtistsList.propTypes = {
  fetchGetArtists: PropTypes.func.isRequired,
  fm: PropTypes.string.isRequired,
};

export default ArtistsList;
