// Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';

// Containers
import TracksList from '../../containers/tracks';

// Styles
import styles from './styles';

/**
 * @component ArtistView
 * @author Camilo Sáenz
 * @description Artists screen view.
 */

export function ArtistView() {
  return (
    <View style={styles.view}>
      <TracksList />
    </View>
  );
}

/**
 * Component definition of proptypes.
 */
ArtistView.propTypes = {};

export default ArtistView;
