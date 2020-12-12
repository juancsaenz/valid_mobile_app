// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, FlatList, RefreshControl } from 'react-native';

// Components
import TrackItem from '../../components/artistItem';

// Styles
import colors from '../../utils/theme/colors';
import styles from './styles';

/**
 * @component TracksList
 * @author Camilo Sáenz
 * @description Tracks list view.
 */

export class TracksList extends React.PureComponent {
  /**
   * Initilize TracksList component
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
    if (prevProps.fm !== fm) {
      this.handleDataChange();
    }
  }

  /**
   * Call service to load data
   */
  loadData = () => {
    const { fetchGetTracks } = this.props;
    const { page } = this.state;

    this.setState({ isFetching: true }, () => {
      if (fetchGetTracks) {
        fetchGetTracks(page, this.handleDataChange);
      }
    });
  }

  /**
   * Receive response when data refresh
   */
  handleDataChange = () => {
    const { fm: { track } } = this.props;
    const { fetchMore, data } = this.state;
    let newData = [];

    if (fetchMore) {
      newData = data.concat(track.tracks.track);
    } else {
      newData = track.tracks.track;
    }

    this.setState({
      fetchMore: false,
      refresh: false,
      isFetching: false,
      data: newData,
      canLoadMore: newData.length < track.tracks['@attr'].total,
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
          renderItem={({ item }) => (<TrackItem item={item} fromTrack />)}
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
TracksList.propTypes = {
  fetchGetTracks: PropTypes.func.isRequired,
  fm: PropTypes.string.isRequired,
};

export default TracksList;
