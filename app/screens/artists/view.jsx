// Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';

// Containers
import ArtistsList from '../../containers/artists'

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
      <ArtistsList />
    </View>
  );
}

/**
 * Component definition of proptypes.
 */
ArtistView.propTypes = {};

export default ArtistView;
